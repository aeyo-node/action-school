"use client";

import { useEffect, useRef, useState } from "react";

interface UseCanvasSequenceProps {
  folderPath: string; // e.g., "/hero-sequence" (no trailing slash)
  frameCount: number;
}

export function useCanvasSequence({ folderPath, frameCount }: UseCanvasSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    // Helper to pad numbers (e.g. 1 -> "0001", 12 -> "0012")
    const pad = (num: number) => num.toString().padStart(4, "0");

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `${folderPath}/${pad(i)}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setIsLoaded(true);
        }
      };
      imgs.push(img);
    }
    setImages(imgs);
  }, [folderPath, frameCount]);

  // Draw frame based on progress (0 to 1)
  const renderFrame = (progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Calculate frame index
    // Clamp progress between 0 and 1
    const safeProgress = Math.max(0, Math.min(1, progress));
    const frameIndex = Math.min(
      Math.floor(safeProgress * (frameCount - 1)),
      frameCount - 1
    );

    const img = images[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    // "object-fit: cover" logic
    // We want the image to cover the canvas
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Calculate scale to cover
    const imgAspect = img.width / img.height;
    const canvasAspect = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasAspect > imgAspect) {
      // Canvas is wider than image -> fit to width
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgAspect;
      offsetX = 0;
      offsetY = (canvasHeight - drawHeight) / 2; // Center vertically
    } else {
      // Canvas is taller than image -> fit to height
      drawWidth = canvasHeight * imgAspect;
      drawHeight = canvasHeight;
      offsetX = (canvasWidth - drawWidth) / 2; // Center horizontally
      offsetY = 0;
    }

    try {
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    } catch (error) {
      console.error("Error drawing image frame:", frameIndex, error);
    }
  };

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-render current frame? We don't verify progress here, 
        // but next scroll tick will fix it. 
        // Ideally we store last progress.
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Init size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { canvasRef, renderFrame, isLoaded };
}
