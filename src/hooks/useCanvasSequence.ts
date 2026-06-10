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
  const [isLoaded, setIsLoaded] = useState(false);
  const lastFrameRef = useRef(-1);
  const rafRef = useRef<number | null>(null);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    const pad = (num: number) => num.toString().padStart(3, "0");

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `${folderPath}/${filePrefix}${pad(i)}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setIsLoaded(true);
        }
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, [folderPath, frameCount, filePrefix]);

  // Draw frame based on progress (0 to 1)
  const renderFrame = useCallback((progress: number) => {
    const canvas = canvasRef.current;
    const images = imagesRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const safeProgress = Math.max(0, Math.min(1, progress));
    const frameIndex = Math.min(
      Math.floor(safeProgress * (frameCount - 1)),
      frameCount - 1
    );

    // Skip if same frame
    if (frameIndex === lastFrameRef.current) return;
    lastFrameRef.current = frameIndex;

    const img = images[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

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
        // Force re-render
        lastFrameRef.current = -1;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { canvasRef, renderFrame, isLoaded };
}
