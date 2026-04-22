import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollSequenceProps {
  frameCount: number;
  baseUrl: string;
  prefix: string;
  containerRef: React.RefObject<HTMLElement | null>;
}

const ScrollSequence: React.FC<ScrollSequenceProps> = ({ 
  frameCount, 
  baseUrl, 
  prefix,
  containerRef 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const scrollPos = useRef({ frame: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Set canvas dimensions
    const updateSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      renderFrame(Math.floor(scrollPos.current.frame));
    };

    const renderFrame = (index: number) => {
      const img = imagesRef.current[index];
      if (!img || !img.complete) return;

      // Draw image with "object-fit: cover" logic
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      
      let drawWidth, drawHeight, drawX, drawY;

      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        drawX = 0;
        drawY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgRatio;
        drawHeight = canvas.height;
        drawX = (canvas.width - drawWidth) / 2;
        drawY = 0;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    };

    // Preload images
    const loadImages = async () => {
      const loadPromises = [];
      for (let i = 1; i <= frameCount; i++) {
        const frameNum = i.toString().padStart(3, '0');
        const img = new Image();
        img.src = `${baseUrl}/${prefix}_${frameNum}.jpg`;
        imagesRef.current[i - 1] = img;
        loadPromises.push(new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve; // Continue even if one fails
        }));
      }
      await Promise.all(loadPromises);
      renderFrame(0);
    };

    loadImages();
    updateSize();
    window.addEventListener('resize', updateSize);

    // ScrollTrigger Animation
    const ctx = gsap.context(() => {
      gsap.to(scrollPos.current, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          // markers: true, // Uncomment for debugging
        },
        onUpdate: () => {
          renderFrame(Math.floor(scrollPos.current.frame));
        }
      });
    });

    return () => {
      window.removeEventListener('resize', updateSize);
      ctx.revert();
    };
  }, [frameCount, baseUrl, prefix, containerRef]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
    />
  );
};

export default ScrollSequence;
