"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Point {
  x: number;
  y: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
}

export const SnakeViz = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 900);
    let height = (canvas.height = 320);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 320;
    };

    window.addEventListener("resize", handleResize);

    // Initialize snake body
    const segmentCount = 65;
    const body: Point[] = [];
    let angle = 0;
    let headX = width * 0.2;
    let headY = height * 0.5;

    for (let i = 0; i < segmentCount; i++) {
      body.push({ x: headX - i * 4, y: headY });
    }

    // Particles system
    const particles: Particle[] = [];
    const maxParticles = 35;

    const spawnParticle = (x: number, y: number) => {
      particles.push({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.6 + 0.2,
        life: 0,
        maxLife: Math.random() * 60 + 40,
      });
    };

    let time = 0;

    const render = () => {
      time += 0.015;

      // Clear with subtle trail
      ctx.fillStyle = "rgba(0, 3, 25, 0.2)";
      ctx.fillRect(0, 0, width, height);

      // Draw technical coordinate grid
      ctx.strokeStyle = "rgba(56, 189, 248, 0.04)";
      ctx.lineWidth = 1;
      const gridSize = 40;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Move head smoothly with sine/cosine undulations
      const speed = 3.2;
      const targetAngle =
        Math.sin(time * 1.2) * 1.1 + Math.cos(time * 0.7) * 0.5;
      angle += (targetAngle - angle) * 0.08;

      headX += Math.cos(angle) * speed;
      headY += Math.sin(angle) * speed;

      // Soft boundary steering
      const margin = 50;
      if (headX < margin) headX = margin;
      if (headX > width - margin) headX = width - margin;
      if (headY < margin) headY = margin;
      if (headY > height - margin) headY = height - margin;

      // Turn around when near bounds
      if (headX <= margin || headX >= width - margin) {
        angle = Math.PI - angle;
      }
      if (headY <= margin || headY >= height - margin) {
        angle = -angle;
      }

      // Update body segments: each follows the one in front
      body.unshift({ x: headX, y: headY });
      if (body.length > segmentCount) {
        body.pop();
      }

      // Emit particles from glowing head
      if (particles.length < maxParticles && Math.random() > 0.4) {
        spawnParticle(headX, headY);
      }

      // Draw trailing body segments with electric blue -> purple gradient
      for (let i = body.length - 1; i > 0; i--) {
        const p1 = body[i];
        const p2 = body[i - 1];

        const progress = i / body.length; // 1 at tail, 0 at head
        const alpha = Math.max(0, 1 - progress);
        const lineWidth = (1 - progress) * 6 + 1.5;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        // Dynamic electric blue to purple color shift
        const r = Math.round(56 + progress * 147); // 56 -> 203 (#38bdf8 to #CBACF9)
        const g = Math.round(189 - progress * 17); // 189 -> 172
        const b = Math.round(248 + progress * 1);  // 248 -> 249

        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.85})`;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.shadowColor = "rgba(56, 189, 248, 0.4)";
        ctx.shadowBlur = (1 - progress) * 12;
        ctx.stroke();
      }

      // Draw Glowing Head Node
      ctx.beginPath();
      ctx.arc(headX, headY, 6.5, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 24;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(headX, headY, 12, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(56, 189, 248, 0.25)";
      ctx.fill();

      // Render & update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const pAlpha = p.alpha * (1 - p.life / p.maxLife);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(203, 172, 249, ${pAlpha})`;
        ctx.shadowColor = "#c084fc";
        ctx.shadowBlur = 8;
        ctx.fill();

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-400">
            Computational Intelligence
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Intelligence <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">in Motion</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-300">
            Visualizing the continuous flow of data, learning, and intelligent decision-making.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#000319] p-4 shadow-2xl backdrop-blur-2xl"
        >
          {/* Status Overlay Badge */}
          <div className="absolute left-6 top-6 z-10 flex items-center gap-2 rounded-full border border-sky-500/30 bg-black/60 px-3.5 py-1 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-ping" />
            <span className="text-[11px] font-mono tracking-wider text-sky-300">
              SYNAPSE FLOW ACTIVE · 60 FPS
            </span>
          </div>

          <canvas
            ref={canvasRef}
            className="block h-[320px] w-full rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};
