import React from "react";
import { useEffect, useRef } from "react";

interface Particle {
	x: number;
	y: number;
	width: number;
	height: number;
	id: number;
	life: number;
	maxlife: number;
	alpha: number;
}

const MAX_PARTICLES = 400;
const PARTICLES_PER_FRAME = 3;

const ParticleBackground: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const animationRef = useRef<number | null>(null);
	const particlesRef = useRef<Map<number, Particle>>(new Map());
	const pIndexRef = useRef(0);
	const isVisibleRef = useRef(true);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		ctx.globalCompositeOperation = "source-over";

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resize();
		window.addEventListener("resize", resize);

		const getRandom = (min: number, max: number) => {
			return Math.random() * (max - min) + min;
		};

		const createDot = (
			x: number,
			y: number,
			w: number,
			h: number,
		): Particle => {
			const id = pIndexRef.current++;
			const particle: Particle = {
				x,
				y,
				width: w,
				height: h,
				id,
				life: 0,
				maxlife: getRandom(1, 3),
				alpha: getRandom(0.01, 0.2),
			};
			particlesRef.current.set(id, particle);
			return particle;
		};

		const drawParticle = (particle: Particle) => {
			ctx.strokeStyle = `rgba(125, 125, 125, ${particle.alpha})`;
			ctx.beginPath();
			ctx.moveTo(particle.x + particle.x / 2, particle.y + particle.y / 2);
			ctx.lineTo(
				particle.x + particle.x / 2 + particle.width / 2,
				particle.y + particle.y / 2 + particle.height,
			);
			ctx.closePath();
			ctx.stroke();

			particle.life++;
			if (particle.life >= particle.maxlife) {
				particlesRef.current.delete(particle.id);
			}
		};

		let frameCount = 0;
		const loop = () => {
			if (!isVisibleRef.current) {
				animationRef.current = requestAnimationFrame(loop);
				return;
			}

			// Skip every 2nd frame for 30fps (reduces CPU by 50%)
			frameCount++;
			if (frameCount % 2 !== 0) {
				animationRef.current = requestAnimationFrame(loop);
				return;
			}

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Add only a few particles per frame, not 600
			for (let i = 0; i < PARTICLES_PER_FRAME; i++) {
				if (particlesRef.current.size < MAX_PARTICLES) {
					createDot(
						canvas.width * Math.random() * 2 - canvas.width / 2,
						canvas.height * Math.random(),
						getRandom(-15, 15),
						getRandom(70, 150),
					);
				}
			}

			particlesRef.current.forEach((particle) => {
				drawParticle(particle);
			});

			animationRef.current = requestAnimationFrame(loop);
		};

		// Handle visibility change
		const handleVisibility = () => {
			isVisibleRef.current = !document.hidden;
		};
		document.addEventListener("visibilitychange", handleVisibility);

		loop();

		return () => {
			window.removeEventListener("resize", resize);
			document.removeEventListener("visibilitychange", handleVisibility);
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: -1,
				pointerEvents: "none",
				willChange: "transform",
				transform: "translateZ(0)",
			}}
		/>
	);
};

export default ParticleBackground;
