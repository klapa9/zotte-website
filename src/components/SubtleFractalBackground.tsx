import React, { useRef, useEffect } from "react";

const SubtleFractalBackground = () => {
  const canvasRef = useRef(null);
  const rotationVelocityRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let lastScrollY = window.scrollY;

    // Scroll beïnvloedt alleen snelheid (niet positie!)
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      const delta = newScrollY - lastScrollY;

      // versnelling toevoegen
      rotationVelocityRef.current += delta * 0.0015;

      lastScrollY = newScrollY;
    };
    window.addEventListener("scroll", handleScroll);

    let time = 0;
    let rotationOffset = 0;

    const drawMandala = (cx, cy, layers, petals, baseRadius) => {
      for (let layer = 0; layer < layers; layer++) {
        const layerRadius = baseRadius * ((layer + 1) / layers);
        const alpha = 0.3 + 0.1 * layer;

        for (let petal = 0; petal < petals; petal++) {
          const angle =
            ((Math.PI * 2) / petals) * petal +
            rotationOffset +
            Math.sin(time * 0.001 + layer) * 2;

          const pulse =
            0.8 + 0.2 * Math.sin(time * 0.01 + layer + petal);

          const x = cx + Math.cos(angle) * layerRadius * pulse;
          const y = cy + Math.sin(angle) * layerRadius * pulse;

          ctx.beginPath();
          const size =
            4 + layer * 2 + Math.sin(time * 0.02 + petal) * 2;
          ctx.arc(x, y, size, 0, Math.PI * 2);

          ctx.fillStyle = `hsla(${
            (petal * 20 + layer * 40 + time * 0.5) % 360
          }, 75%, 55%, ${alpha})`;

          ctx.fill();
        }
      }
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;

      // achtergrond
      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(
        0,
        `hsla(${(time * 0.02) % 360}, 60%, 45%, 0.2)`
      );
      gradient.addColorStop(
        1,
        `hsla(${(time * 0.04 + 120) % 360}, 60%, 45%, 0.2)`
      );
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      // mandala altijd gecentreerd
      const cx = w / 2;
      const cy = h / 2;

      // rotatie + scroll velocity
      rotationOffset += 0.002 + rotationVelocityRef.current;

      // damping → effect verdwijnt vanzelf
      rotationVelocityRef.current *= 0.94;

      drawMandala(cx, cy, 6, 24, Math.min(w, h));

      // optionele fractal kern
      for (let i = 0; i < 80; i++) {
        const angle = Math.sin(time * 0.001 + i) * Math.PI * 2;
        const radius = 100 + Math.sin(time * 0.002 + i) * 150;

        const x = cx + Math.cos(angle + i) * radius;
        const y = cy + Math.sin(angle + i) * radius;

        ctx.beginPath();
        ctx.arc(
          x,
          y,
          3 + Math.sin(time * 0.01 + i) * 2,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `hsla(${
          (i * 12 + time * 0.5) % 360
        }, 75%, 55%, 0.5)`;
        ctx.fill();
      }

      time++;
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        display: "block",
      }}
    />
  );
};

export default SubtleFractalBackground;