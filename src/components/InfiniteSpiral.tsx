import { useEffect, useRef } from 'react';

type Particle = {
  angle: number;
  radius: number;
  z: number;
  size: number;
  speed: number;
  hueShift: number;
};

type WaveRing = {
  progress: number;
  speed: number;
  thickness: number;
};

const InfiniteSpiral = () => {
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

    const particles: Particle[] = [];
    const waveRings: WaveRing[] = Array.from({ length: 7 }, (_, i) => ({
      progress: i / 7,
      speed: (0.002 + i * 0.00035) * 0.05,
      thickness: 1.5 + i * 0.4,
    }));

    const PARTICLE_COUNT = Math.min(320, Math.floor((width * height) / 4200));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const createParticles = () => {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          angle: Math.random() * Math.PI * 2,
          radius: Math.random() * Math.max(width, height) * 0.45,
          z: Math.random(),
          size: Math.random() * 2.2 + 0.4,
          speed: (Math.random() * 0.012 + 0.004) * 0.05,
          hueShift: Math.random() * 360,
        });
      }
    };

    const drawBackground = () => {
      const bg = ctx.createLinearGradient(0, 0, width, height);
      bg.addColorStop(0, '#020617');
      bg.addColorStop(0.2, '#14051f');
      bg.addColorStop(0.45, '#1d0b3a');
      bg.addColorStop(0.7, '#071a3d');
      bg.addColorStop(1, '#030712');

      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);
    };

    const drawNebulaClouds = () => {
      const pulse = (Math.sin(time * 0.9) + 1) / 2;

      const blobs = [
        {
          x: width * 0.18,
          y: height * 0.24,
          r: width * 0.35,
          c1: `rgba(255,0,180,${0.13 + pulse * 0.04})`,
          c2: 'rgba(120,0,255,0.06)',
        },
        {
          x: width * 0.82,
          y: height * 0.28,
          r: width * 0.3,
          c1: `rgba(0,220,255,${0.12 + pulse * 0.03})`,
          c2: 'rgba(0,100,255,0.05)',
        },
        {
          x: width * 0.5,
          y: height * 0.82,
          r: width * 0.42,
          c1: `rgba(255,180,0,${0.08 + pulse * 0.03})`,
          c2: 'rgba(255,0,120,0.04)',
        },
      ];

      for (const blob of blobs) {
        const g = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r);
        g.addColorStop(0, blob.c1);
        g.addColorStop(0.45, blob.c2);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);
      }
    };

    const drawPsychedelicTunnel = () => {
      const cx = width / 2;
      const cy = height / 2;
      const maxRadius = Math.max(width, height) * 0.78;

      for (let i = 0; i < 85; i++) {
        const depth = i / 85;
        const radius = 35 + depth * maxRadius;
        const scale = 1 - depth;

        // halve snelheid tegenover vorige versie
        const baseRotation = time * 0.9;
        const phase = i * 0.24;

        const wobbleX = Math.cos(baseRotation + phase) * (10 + depth * 16);
        const wobbleY = Math.sin(baseRotation * 0.85 + phase) * (8 + depth * 14);

        const hue = (time * 40 + i * 7 + Math.sin(time + i * 0.15) * 60) % 360;
        const alpha = 0.035 + scale * 0.14;

        ctx.beginPath();
        ctx.lineWidth = 1.2 + scale * 2.4;
        ctx.strokeStyle = `hsla(${hue}, 100%, ${58 + Math.sin(time * 1.2 + i * 0.2) * 10}%, ${alpha})`;
        ctx.arc(cx + wobbleX, cy + wobbleY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const drawSpiralArms = () => {
      const cx = width / 2;
      const cy = height / 2;
      const arms = 5;

      for (let arm = 0; arm < arms; arm++) {
        for (let i = 0; i < 120; i++) {
          const t = i / 120;

          // ook hier halve draaiing
          const angle = time * 1.15 + arm * ((Math.PI * 2) / arms) + t * 12;
          const radius = t * Math.max(width, height) * 0.62;

          const x = cx + Math.cos(angle) * radius;
          const y = cy + Math.sin(angle) * radius * 0.68;

          const size = (1 - t) * 4 + 0.3;
          const hue = (arm * 70 + i * 3 + time * 55) % 360;
          const alpha = (1 - t) * 0.22;

          ctx.beginPath();
          ctx.fillStyle = `hsla(${hue}, 100%, 70%, ${alpha})`;
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.fillStyle = `hsla(${(hue + 60) % 360}, 100%, 60%, ${alpha * 0.35})`;
          ctx.arc(x, y, size * 2.3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const drawWaveRings = () => {
      const cx = width / 2;
      const cy = height / 2;
      const maxRadius = Math.max(width, height) * 0.85;

      for (let i = 0; i < waveRings.length; i++) {
        const ring = waveRings[i];
        ring.progress += ring.speed;
        if (ring.progress > 1) ring.progress = 0;

        const radius = ring.progress * maxRadius;
        const distortion = 14 + i * 3;
        const hue = (time * 60 + i * 45) % 360;
        const alpha = (1 - ring.progress) * 0.18;

        ctx.beginPath();

        for (let a = 0; a <= Math.PI * 2 + 0.05; a += 0.08) {
          const ripple =
            Math.sin(a * 6 + time * 1.6 + i) * distortion +
            Math.cos(a * 4 - time * 1.1) * distortion * 0.4;

          const rr = radius + ripple;
          const x = cx + Math.cos(a) * rr;
          const y = cy + Math.sin(a) * rr;

          if (a === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.closePath();
        ctx.lineWidth = ring.thickness;
        ctx.strokeStyle = `hsla(${hue}, 100%, 68%, ${alpha})`;
        ctx.stroke();
      }
    };

    const drawParticles = () => {
      const cx = width / 2;
      const cy = height / 2;

      for (const p of particles) {
        p.z += p.speed*0.2;

        if (p.z > 1) {
          p.angle = Math.random() * Math.PI * 2;
          p.radius = Math.random() * Math.max(width, height) * 0.45;
          p.z = 0.01;
          p.size = Math.random() * 2.2 + 0.4;
          p.speed = Math.random() * 0.002 + 0.004;
          p.hueShift = Math.random() * 360;
        }

        // tragere rotatie
        const angle = p.angle + time * 0.7 + p.z * 5.5;
        const perspective = 0.18 + p.z * 1.7;
        const warpedRadius = p.radius * perspective;

        const x = cx + Math.cos(angle) * warpedRadius;
        const y = cy + Math.sin(angle) * warpedRadius * 0.72;

        const size = p.size * perspective;
        const hue = (p.hueShift + time * 80 + p.z * 140) % 360;
        const alpha = p.z * 0.75;

        ctx.beginPath();
        ctx.fillStyle = `hsla(${hue}, 100%, 72%, ${alpha})`;
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = `hsla(${(hue + 70) % 360}, 100%, 60%, ${alpha * 0.22})`;
        ctx.arc(x, y, size * 3.2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawCenterPortal = () => {
      const cx = width / 2;
      const cy = height / 2;
      const pulse = 26 + Math.sin(time * 2.1) * 6;

      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 180);
      g.addColorStop(0, 'rgba(255,255,255,0.95)');
      g.addColorStop(0.06, 'rgba(255,0,200,0.75)');
      g.addColorStop(0.14, 'rgba(0,220,255,0.48)');
      g.addColorStop(0.3, 'rgba(120,0,255,0.2)');
      g.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(cx, cy, pulse * 3.8, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawMouseGlow = () => {
      if (!mouseRef.current.active) return;

      const glow = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        240
      );
      glow.addColorStop(0, 'rgba(255,255,255,0.10)');
      glow.addColorStop(0.2, 'rgba(255,0,200,0.08)');
      glow.addColorStop(0.45, 'rgba(0,220,255,0.07)');
      glow.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
    };

    const drawFilmGrain = () => {
      const density = 60;
      for (let i = 0; i < density; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const alpha = Math.random() * 0.035;
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fillRect(x, y, 1, 1);
      }
    };
    const TIME_SCALE = 0.05;

    const animate = () => {
      time += 0.01 * TIME_SCALE;

      drawBackground();
      drawNebulaClouds();
      drawWaveRings();
      drawPsychedelicTunnel();
      drawSpiralArms();
      drawParticles();
      drawCenterPortal();
      drawMouseGlow();
      drawFilmGrain();

      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resize();
      createParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x += (e.clientX - mouseRef.current.x) * 0.1;
      mouseRef.current.y += (e.clientY - mouseRef.current.y) * 0.1;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    resize();
    createParticles();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute top-[8%] left-[8%] w-80 h-80 rounded-full bg-fuchsia-500/10 blur-3xl animate-pulse" />
        <div className="absolute top-[18%] right-[10%] w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-[8%] left-[28%] w-[30rem] h-[30rem] rounded-full bg-violet-500/10 blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_32%,rgba(0,0,0,0.28)_100%)]" />
      </div>
    </>
  );
};

export default InfiniteSpiral;