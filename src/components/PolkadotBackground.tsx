import { useTheme } from "@mui/material/styles";
import type React from "react";
import { useEffect, useRef } from "react";

interface Dot {
	x: number;
	y: number;
	baseRadius: number;
}

interface PolkadotBackgroundProps {
	isDarkMode?: boolean;
}

const GLOW_RADIUS = 120;
const DOT_SPACING = 15;
const DOT_BASE_RADIUS = 1;
const DOT_MAX_RADIUS = 2;

function initDots(width: number, height: number): Dot[] {
	const dots: Dot[] = [];
	const cols = Math.ceil(width / DOT_SPACING) + 1;
	const rows = Math.ceil(height / DOT_SPACING) + 1;
	const offsetX = (width - (cols - 1) * DOT_SPACING) / 2;
	const offsetY = (height - (rows - 1) * DOT_SPACING) / 2;

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			dots.push({
				x: offsetX + col * DOT_SPACING,
				y: offsetY + row * DOT_SPACING,
				baseRadius: DOT_BASE_RADIUS,
			});
		}
	}
	return dots;
}

const extractRgb = (colorStr: string) => {
	let str = colorStr;
	if (str.startsWith("#")) {
		if (str.length === 4) {
			str = "#" + str[1] + str[1] + str[2] + str[2] + str[3] + str[3];
		}
		const r = parseInt(str.slice(1, 3), 16);
		const g = parseInt(str.slice(3, 5), 16);
		const b = parseInt(str.slice(5, 7), 16);
		return { r, g, b };
	}
	const matches = str.match(/\d+/g);
	if (matches && matches.length >= 3) {
		return {
			r: parseInt(matches[0], 10),
			g: parseInt(matches[1], 10),
			b: parseInt(matches[2], 10),
		};
	}
	return { r: 0, g: 0, b: 0 };
};

const PolkadotBackground: React.FC<PolkadotBackgroundProps> = ({
	isDarkMode = true,
}) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const dotsRef = useRef<Dot[]>([]);
	const mouseRef = useRef({ x: -1000, y: -1000 });
	const theme = useTheme();

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resize = () => {
			const dpr = window.devicePixelRatio || 1;
			canvas.width = window.innerWidth * dpr;
			canvas.height = window.innerHeight * dpr;
			canvas.style.width = `${window.innerWidth}px`;
			canvas.style.height = `${window.innerHeight}px`;
			dotsRef.current = initDots(window.innerWidth, window.innerHeight);
		};

		const handleMouseMove = (e: MouseEvent) => {
			mouseRef.current = { x: e.clientX, y: e.clientY };
		};

		const handleMouseLeave = () => {
			mouseRef.current = { x: -1000, y: -1000 };
		};

		const handleTouchMove = (e: TouchEvent) => {
			if (e.touches.length > 0) {
				mouseRef.current = {
					x: e.touches[0].clientX,
					y: e.touches[0].clientY,
				};
			}
		};

		const handleTouchEnd = () => {
			mouseRef.current = { x: -1000, y: -1000 };
		};

		const bgColor = extractRgb(theme.palette.background.default);
		const dotBaseColor = extractRgb(
			isDarkMode ? theme.palette.text.primary : theme.palette.text.secondary,
		);
		const glowColor = extractRgb(
			isDarkMode ? theme.palette.primary.main : theme.palette.text.primary,
		);
		const highlightRgb = extractRgb(
			isDarkMode ? theme.palette.common.white : theme.palette.common.black,
		);
		const highlightColorStr = `${highlightRgb.r}, ${highlightRgb.g}, ${highlightRgb.b}`;

		const draw = () => {
			const { x: mx, y: my } = mouseRef.current;
			const dpr = window.devicePixelRatio || 1;

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Background
			ctx.fillStyle = `rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})`;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			// Draw dots
			for (const dot of dotsRef.current) {
				const dx = dot.x - mx;
				const dy = dot.y - my;
				const dist = Math.sqrt(dx * dx + dy * dy);

				let glowIntensity = 0;
				if (dist < GLOW_RADIUS) {
					glowIntensity = 1 - dist / GLOW_RADIUS;
					glowIntensity = glowIntensity * glowIntensity;
				}

				const radius =
					dot.baseRadius + (DOT_MAX_RADIUS - dot.baseRadius) * glowIntensity;
				const alpha = 0.3 + 0.7 * glowIntensity;

				// Interpolate between dot color and glow color
				const r = Math.round(
					dotBaseColor.r + (glowColor.r - dotBaseColor.r) * glowIntensity,
				);
				const g = Math.round(
					dotBaseColor.g + (glowColor.g - dotBaseColor.g) * glowIntensity,
				);
				const b = Math.round(
					dotBaseColor.b + (glowColor.b - dotBaseColor.b) * glowIntensity,
				);

				if (glowIntensity > 0.05) {
					const glowSize = radius + 12 * glowIntensity;
					const gradient = ctx.createRadialGradient(
						dot.x * dpr,
						dot.y * dpr,
						radius * dpr * 0.5,
						dot.x * dpr,
						dot.y * dpr,
						glowSize * dpr,
					);
					gradient.addColorStop(
						0,
						`rgba(${r}, ${g}, ${b}, ${0.4 * glowIntensity})`,
					);
					gradient.addColorStop(
						0.5,
						`rgba(${r}, ${g}, ${b}, ${0.15 * glowIntensity})`,
					);
					gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

					ctx.beginPath();
					ctx.arc(dot.x * dpr, dot.y * dpr, glowSize * dpr, 0, Math.PI * 2);
					ctx.fillStyle = gradient;
					ctx.fill();
				}

				ctx.beginPath();
				ctx.arc(dot.x * dpr, dot.y * dpr, radius * dpr, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
				ctx.fill();

				if (glowIntensity > 0.3) {
					const highlightAlpha = (glowIntensity - 0.3) / 0.7;
					ctx.beginPath();
					ctx.arc(dot.x * dpr, dot.y * dpr, radius * dpr * 0.5, 0, Math.PI * 2);
					ctx.fillStyle = `rgba(${highlightColorStr}, ${highlightAlpha * 0.6})`;
					ctx.fill();
				}
			}

			animationId = requestAnimationFrame(draw);
		};

		resize();
		window.addEventListener("resize", resize);
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseleave", handleMouseLeave);
		window.addEventListener("touchmove", handleTouchMove);
		window.addEventListener("touchend", handleTouchEnd);

		let animationId = requestAnimationFrame(draw);

		return () => {
			window.removeEventListener("resize", resize);
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseleave", handleMouseLeave);
			window.removeEventListener("touchmove", handleTouchMove);
			window.removeEventListener("touchend", handleTouchEnd);
			cancelAnimationFrame(animationId);
		};
	}, [theme, isDarkMode]);

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
				cursor: "crosshair",
			}}
		/>
	);
};

export default PolkadotBackground;
