"use client";

import { useEffect, useRef } from "react";

const STAR_COLORS = ["#ffffff", "#ffb877", "#8fcdff", "#fff2ab"];

export default function NightSky() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    type Star = {
      x: number;
      y: number;
      r: number;
      color: string;
      phase: number;
      speed: number;
    };

    let stars: Star[] = [];
    let width = 0;
    let height = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(320, Math.floor((width * height) / 3200));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height * 0.85,
        r: Math.random() * 1.2 + 0.4,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 0.8,
      }));
    }

    let raf = 0;
    const start = performance.now();
    function draw(now: number) {
      const t = (now - start) / 1000;
      ctx!.clearRect(0, 0, width, height);
      for (const s of stars) {
        const twinkle = 0.5 + 0.5 * Math.sin(t * s.speed + s.phase);
        ctx!.globalAlpha = 0.35 + twinkle * 0.65;
        ctx!.fillStyle = s.color;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#000000_0%,#050912_30%,#0b1a3d_52%,#173768_72%,#4d76a8_88%,#eef4fb_100%)]" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
