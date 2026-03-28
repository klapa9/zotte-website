import { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  z: number;
  radius: number;
  speed: number;
  twinkle: number;
  twinkleSpeed: number;
};

type ShootingStar = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
};

const CosmicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let time = 0;

    const stars: Star[] = [];
    const shootingStars: ShootingStar[] = [];

    const STAR_COUNT = Math.min(220, Math.floor((width * height) / 7000));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const createStars = () => {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 1.5 + 0.5,
          radius: Math.random() * 1.8 + 0.4,
          speed: Math.random() * 0.25 + 0.05,
          twinkle: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
        });
      }
    };

    const spawnShootingStar = () => {
      const startX = Math.random() * width * 0.8;
      const startY = Math.random() * height * 0.4;

      shootingStars.push({
        x: startX,
        y: startY,
        vx: Math.random() * 8 + 10,
        vy: Math.random() * 3 + 4,
        life: 0,
        maxLife: 50 + Math.random() * 30,
      });
    };

    const drawNebula = () => {
      const gradient1 = ctx.createRadialGradient(
        width * 0.2,
        height * 0.25,
        0,
        width * 0.2,
        height * 0.25,
        width * 0.5
      );
      gradient1.addColorStop(0, 'rgba(168, 85, 247, 0.18)');
      gradient1.addColorStop(0.4, 'rgba(59, 130, 246, 0.08)');
      gradient1.addColorStop(1, 'rgba(0, 0, 0, 0)');

      const gradient2 = ctx.createRadialGradient(
        width * 0.8,
        height * 0.35,
        0,
        width * 0.8,
        height * 0.35,
        width * 0.45
      );
      gradient2.addColorStop(0, 'rgba(236, 72, 153, 0.16)');
      gradient2.addColorStop(0.45, 'rgba(139, 92, 246, 0.08)');
      gradient2.addColorStop(1, 'rgba(0, 0, 0, 0)');

      const gradient3 = ctx.createRadialGradient(
        width * 0.5,
        height * 0.8,
        0,
        width * 0.5,
        height * 0.8,
        width * 0.5
      );
      gradient3.addColorStop(0, 'rgba(34, 211, 238, 0.08)');
      gradient3.addColorStop(0.4, 'rgba(16, 185, 129, 0.05)');
      gradient3.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, width, height);
    };

    const drawMouseGlow = () => {
      if (!mouseRef.current.active) return;

      const glow = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        180
      );
      glow.addColorStop(0, 'rgba(255,255,255,0.12)');
      glow.addColorStop(0.25, 'rgba(168,85,247,0.10)');
      glow.addColorStop(0.5, 'rgba(59,130,246,0.07)');
      glow.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
    };

    const drawStars = () => {
      for (const star of stars) {
        star.y += star.speed * star.z;
        star.x += Math.sin((time + star.twinkle) * 0.3) * 0.15 * star.z;
        star.twinkle += star.twinkleSpeed;

        if (star.y > height + 10) {
          star.y = -10;
          star.x = Math.random() * width;
        }

        const alpha = 0.45 + Math.sin(star.twinkle) * 0.35;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.arc(star.x, star.y, star.radius * star.z, 0, Math.PI * 2);
        ctx.fill();

        if (star.radius * star.z > 1.8) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.25})`;
          ctx.moveTo(star.x - 4, star.y);
          ctx.lineTo(star.x + 4, star.y);
          ctx.moveTo(star.x, star.y - 4);
          ctx.lineTo(star.x, star.y + 4);
          ctx.stroke();
        }
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < i + 4 && j < stars.length; j++) {
          const a = stars[i];
          const b = stars[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,255,255,${0.04 * (1 - dist / 100)})`;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    const drawShootingStars = () => {
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life++;

        const alpha = 1 - s.life / s.maxLife;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx.lineWidth = 2;
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 4, s.y - s.vy * 4);
        ctx.stroke();

        if (s.life >= s.maxLife) {
          shootingStars.splice(i, 1);
        }
      }
    };

    const animate = () => {
      time += 0.01;

      const base = ctx.createLinearGradient(0, 0, width, height);
      base.addColorStop(0, '#1e093b');
      base.addColorStop(0.35, '#1e1b6b');
      base.addColorStop(0.7, '#312e81');
      base.addColorStop(1, '#4a044e');
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, width, height);

      drawNebula();
      drawStars();
      drawConnections();
      drawShootingStars();
      drawMouseGlow();

      if (Math.random() < 0.012 && shootingStars.length < 3) {
        spawnShootingStar();
      }

      animationId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const onMouseLeave = () => {
      mouseRef.current.active = false;
    };

    resize();
    createStars();
    animate();

    window.addEventListener('resize', () => {
      resize();
      createStars();
    });
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-fuchsia-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute top-[30%] right-[10%] w-80 h-80 bg-cyan-400/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] left-[35%] w-96 h-96 bg-violet-500/10 blur-3xl rounded-full animate-pulse" />
      </div>
    </>
  );
};

export default CosmicBackground;