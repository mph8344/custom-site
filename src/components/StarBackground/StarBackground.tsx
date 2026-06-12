import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import gsap from 'gsap';

const STAR_COUNT = 180;

interface Star {
  x: number;
  y: number;
  r: number;
  alpha: number;
}

export interface StarBackgroundHandle {
  sweepOut(duration?: number): Promise<void>;
}

interface Props {
  enabled: boolean;
}

const StarBackground = forwardRef<StarBackgroundHandle, Props>(
  function StarBackground({ enabled }, ref) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starsRef = useRef<Star[]>([]);
    const tweensRef = useRef<gsap.core.Tween[]>([]);

    useImperativeHandle(ref, () => ({
      sweepOut(duration: number = 1.4): Promise<void> {
        return new Promise((resolve) => {
          const canvas = canvasRef.current;
          const stars = starsRef.current;
          if (!canvas || stars.length === 0) {
            resolve();
            return;
          }

          tweensRef.current.forEach((t) => t.kill());
          tweensRef.current = [];

          const cx = canvas.width / 2;
          const cy = canvas.height / 2;

          // Sort outermost stars first so they fade first
          const sorted = [...stars].sort((a, b) => {
            const da = Math.hypot(a.x - cx, a.y - cy);
            const db = Math.hypot(b.x - cx, b.y - cy);
            return db - da;
          });

          const spreadDuration = duration; // total time between first and last star starting
          const fadeDuration = 0.5;

          sorted.forEach((star, i) => {
            const delay = (i / (sorted.length - 1)) * spreadDuration;
            tweensRef.current.push(
              gsap.to(star, {
                alpha: 0,
                duration: fadeDuration,
                delay,
                ease: 'power2.in',
                onComplete: i === sorted.length - 1 ? resolve : undefined,
              }),
            );
          });
        });
      },
    }));

    useEffect(() => {
      // if (!enabled) return;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      function initStars() {
        tweensRef.current.forEach((t) => t.kill());
        tweensRef.current = [];

        canvas!.width = window.innerWidth;
        canvas!.height = window.innerHeight;

        starsRef.current = Array.from({ length: STAR_COUNT }, () => ({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          r: Math.random() * 1.5 + 0.5,
          alpha: Math.random(),
        }));

        if (!enabled) {
          return;
        }

        tweensRef.current = starsRef.current.map((star) =>
          gsap.to(star, {
            alpha: Math.random() * 0.7 + 0.3,
            duration: Math.random() * 3 + 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: Math.random() * 5,
          }),
        );
      }

      function draw() {
        ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
        for (const star of starsRef.current) {
          ctx!.beginPath();
          ctx!.arc(star.x, star.y, star.r, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(255, 255, 255, ${star.alpha.toFixed(3)})`;
          ctx!.fill();
        }
      }

      const handleResize = () => initStars();

      initStars();
      gsap.ticker.add(draw);
      window.addEventListener('resize', handleResize);

      return () => {
        gsap.ticker.remove(draw);
        tweensRef.current.forEach((t) => t.kill());
        tweensRef.current = [];
        window.removeEventListener('resize', handleResize);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      };
    }, [enabled]);

    return (
      <canvas
        ref={canvasRef}
        aria-hidden='true'
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          display: 'block',
        }}
      />
    );
  },
);

export default StarBackground;
