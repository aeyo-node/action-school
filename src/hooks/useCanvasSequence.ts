"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface UseCanvasSequenceProps {
  folderPath: string;
  frameCount: number;
  filePrefix?: string;
}

export function useCanvasSequence({ folderPath, frameCount, filePrefix = "ezgif-frame-" }: UseCanvasSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);
  const lastFrameRef = useRef(-1);
  const rafRef = useRef<number | null>(null);

  // Preload images progressively in batches to prevent network and main-thread congestion
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    const pad = (num: number) => num.toString().padStart(3, "0");

    // Initialize all image objects empty (without src) to pre-allocate
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      imgs.push(img);
    }
    imagesRef.current = imgs;

    // Load first frame immediately for instant visual
    const firstImg = imgs[0];
    firstImg.src = `${folderPath}/${filePrefix}${pad(1)}.jpg`;
    firstImg.onload = () => {
      setFirstFrameLoaded(true);

      // 1. Sparse load: Load every 8th frame first to quickly cover the whole scroll range
      const sparseIndices: number[] = [];
      for (let i = 1; i <= frameCount; i += 8) {
        if (i !== 1) sparseIndices.push(i);
      }

      let sparsePtr = 0;
      const loadNextSparseBatch = () => {
        if (sparsePtr >= sparseIndices.length) {
          loadRemainingFrames();
          return;
        }

        const batchSize = 4;
        const promises = [];
        for (let b = 0; b < batchSize && sparsePtr < sparseIndices.length; b++) {
          const idx = sparseIndices[sparsePtr++];
          const img = imgs[idx - 1];
          img.src = `${folderPath}/${filePrefix}${pad(idx)}.jpg`;
          promises.push(
            new Promise<void>((resolve) => {
              img.onload = () => resolve();
              img.onerror = () => resolve();
            })
          );
        }

        Promise.all(promises).then(() => {
          // Yield to main thread
          setTimeout(loadNextSparseBatch, 16);
        });
      };

      // 2. Load all other remaining frames in small batches
      const loadRemainingFrames = () => {
        const remainingIndices: number[] = [];
        for (let i = 1; i <= frameCount; i++) {
          if (!imgs[i - 1].src) {
            remainingIndices.push(i);
          }
        }

        let remPtr = 0;
        const loadNextBatch = () => {
          if (remPtr >= remainingIndices.length) return;

          const batchSize = 6;
          const promises = [];
          for (let b = 0; b < batchSize && remPtr < remainingIndices.length; b++) {
            const idx = remainingIndices[remPtr++];
            const img = imgs[idx - 1];
            img.src = `${folderPath}/${filePrefix}${pad(idx)}.jpg`;
            promises.push(
              new Promise<void>((resolve) => {
                img.onload = () => resolve();
                img.onerror = () => resolve();
              })
            );
          }

          Promise.all(promises).then(() => {
            if (typeof window !== "undefined" && "requestIdleCallback" in window) {
              window.requestIdleCallback(() => loadNextBatch());
            } else {
              setTimeout(loadNextBatch, 30);
            }
          });
        };

        loadNextBatch();
      };

      // Trigger the sparse queue
      loadNextSparseBatch();
    };

    return () => {
      // Cleanup: stop setting src on unmount if possible (by clearing references or callbacks)
      imagesRef.current = [];
    };
  }, [folderPath, frameCount, filePrefix]);

  // Draw frame based on progress (0 to 1)
  const renderFrame = useCallback((progress: number) => {
    const canvas = canvasRef.current;
    const images = imagesRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const safeProgress = Math.max(0, Math.min(1, progress));
    const targetFrameIndex = Math.min(
      Math.floor(safeProgress * (frameCount - 1)),
      frameCount - 1
    );

    // Find the closest loaded frame to targetFrameIndex
    let frameIndex = -1;
    for (let offset = 0; offset < frameCount; offset++) {
      const backward = targetFrameIndex - offset;
      const forward = targetFrameIndex + offset;
      
      if (backward >= 0 && images[backward] && images[backward].complete && images[backward].naturalWidth > 0) {
        frameIndex = backward;
        break;
      }
      if (forward < frameCount && images[forward] && images[forward].complete && images[forward].naturalWidth > 0) {
        frameIndex = forward;
        break;
      }
    }

    if (frameIndex === -1) return;

    // Skip if same frame
    if (frameIndex === lastFrameRef.current) return;
    lastFrameRef.current = frameIndex;

    const img = images[frameIndex];

    // Cancel any pending render
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // "object-fit: cover" logic
      const imgAspect = img.width / img.height;
      const canvasAspect = canvasWidth / canvasHeight;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasAspect > imgAspect) {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgAspect;
        offsetX = 0;
        offsetY = (canvasHeight - drawHeight) / 2;
      } else {
        drawWidth = canvasHeight * imgAspect;
        drawHeight = canvasHeight;
        offsetX = (canvasWidth - drawWidth) / 2;
        offsetY = 0;
      }

      try {
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      } catch (error) {
        console.error("Error drawing image frame:", frameIndex, error);
      }
    });
  }, [frameCount]);

  // Handle Resize with DPR support for sharp rendering
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
        canvasRef.current.style.width = window.innerWidth + "px";
        canvasRef.current.style.height = window.innerHeight + "px";
        lastFrameRef.current = -1;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { canvasRef, renderFrame, isLoaded: firstFrameLoaded };
}


