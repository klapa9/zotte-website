import React, { useEffect, useRef } from "react";

const colors = ["#22c55e", "#f97316", "#ef4444", "#facc15", "#3b82f6"];

const InfiniteSpiralTunnelDepth = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    const centerX = width / 2;
    const centerY = height / 2;

    let angle = 0;
    let animationFrameId: number;

    // fadekleur iets donkerder maken
    const darkenColor = (hex: string, factor: number) => {
      let col = hex.replace("#", "");
      const num = parseInt(col, 16);
      let r = (num >> 16) - factor;
      let g = ((num >> 8) & 0x00ff) - factor;
      let b = (num & 0x0000ff) - factor;
      r = Math.max(r, 0);
      g = Math.max(g, 0);
      b = Math.max(b, 0);
      return `rgba(${r},${g},${b},0.02)`; // subtiele fade
    };

    const draw = () => {
      if (!ctx) return;

      // langzaam opkomende kleuren fade
      const fadeColor = darkenColor(colors[Math.floor(angle / 50) % colors.length], 30);
      ctx.fillStyle = fadeColor;
      ctx.fillRect(0, 0, width, height);

      const maxRadius = Math.sqrt(centerX ** 2 + centerY ** 2);

      for (let i = 0; i < colors.length; i++) {
        // radius afhankelijk van index en angle
        const radius = ((angle * (i + 1) * 15) % maxRadius);
        const theta = angle * 4 + i;
        const x = centerX + radius * Math.cos(theta);
        const y = centerY + radius * Math.sin(theta);

        // grootte afhankelijk van radius → diepte effect
        const size = 5 + 25 * (radius / maxRadius);

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = colors[i];
        ctx.fill();
      }

      angle += 0.002; // langzame rotatie
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
};

export default InfiniteSpiralTunnelDepth;