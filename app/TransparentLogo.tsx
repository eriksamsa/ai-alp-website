'use client';

import { useEffect, useRef } from 'react';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function TransparentLogo({ src, alt, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const img = new Image();
    img.onload = () => {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = imageData.data;

      // Sample background from top-left corner (5x5 area average)
      let bgR = 0, bgG = 0, bgB = 0, n = 0;
      for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
          const i = (y * canvas.width + x) * 4;
          bgR += d[i]; bgG += d[i+1]; bgB += d[i+2]; n++;
        }
      }
      bgR = Math.round(bgR / n);
      bgG = Math.round(bgG / n);
      bgB = Math.round(bgB / n);

      // Make background-similar pixels transparent
      for (let i = 0; i < d.length; i += 4) {
        const diff = Math.abs(d[i] - bgR) + Math.abs(d[i+1] - bgG) + Math.abs(d[i+2] - bgB);
        if (diff < 55) {
          d[i+3] = 0;
        } else if (diff < 90) {
          d[i+3] = Math.round((diff - 55) / 35 * 255);
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Find bounding box of non-transparent pixels and crop canvas
      let minY = canvas.height, maxY = 0;
      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const alpha = d[(y * canvas.width + x) * 4 + 3];
          if (alpha > 10) {
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }
      }

      // Crop: create new canvas with just the content area
      const padding = 8;
      const cropTop = Math.max(0, minY - padding);
      const cropBottom = Math.min(canvas.height, maxY + padding);
      const cropHeight = cropBottom - cropTop;

      const cropped = document.createElement('canvas');
      cropped.width = canvas.width;
      cropped.height = cropHeight;
      const cCtx = cropped.getContext('2d')!;
      cCtx.drawImage(canvas, 0, cropTop, canvas.width, cropHeight, 0, 0, canvas.width, cropHeight);

      canvas.height = cropHeight;
      ctx.drawImage(cropped, 0, 0);
    };

    img.src = src;
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      role="img"
      aria-label={alt}
    />
  );
}
