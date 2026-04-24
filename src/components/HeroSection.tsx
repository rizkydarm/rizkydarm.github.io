import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { animate, random } from "animejs";

const HeroSection: React.FC = () => {
	const theme = useTheme();
	const titleRef = useRef<HTMLDivElement>(null);
	const subtitleRef = useRef<HTMLDivElement>(null);
	const ctaRef = useRef<HTMLButtonElement>(null);
	const shapesRef = useRef<(HTMLDivElement | null)[]>([]);
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		setIsReady(true);
	}, []);

	useEffect(() => {
		if (!isReady) return;

		// Continuous floating animation for shapes
		const floatingAnimation = animate(
			shapesRef.current.filter(Boolean) as HTMLElement[],
			{
				y: () => random(-70, 70),
				x: () => random(-50, 50),
				rotate: () => random(0, 360),
				duration: () => random(5000, 9000),
				ease: "inOutSine",
				loop: true,
				alternate: true,
			},
		);

		return () => {
			floatingAnimation.pause();
		};
	}, [isReady]);

	const handleMouseEnter = () => {
		if (ctaRef.current) {
			animate(ctaRef.current, {
				scale: 1.05,
				duration: 300,
				ease: "outQuad",
			});
		}
	};

	const handleMouseLeave = () => {
		if (ctaRef.current) {
			animate(ctaRef.current, {
				scale: 1,
				duration: 300,
				ease: "outQuad",
			});
		}
	};

	const titleWords = ["I am Rizky,", "Software Developer"];

	return (
		<Box
			sx={{
				position: "relative",
				zIndex: 10,
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				px: 3,
				pt: "80px",
				pointerEvents: "none",
			}}
		>
			{/* Floating Glass Shapes */}
			<Box
				sx={{
					position: "absolute",
					inset: 0,
					overflow: "hidden",
					pointerEvents: "none",
					zIndex: 1,
				}}
			>
				{/* Circle shape */}
				<Box
					ref={(el: HTMLDivElement | null) => {
						shapesRef.current[0] = el;
					}}
					sx={{
						position: "absolute",
						top: "25%",
						left: "15%",
						width: 112,
						height: 112,
						borderRadius: "50%",
						border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
						background: alpha(theme.palette.primary.main, 0.05),
						backdropFilter: "blur(8px)",
					}}
				/>
				{/* Square shape */}
				<Box
					ref={(el: HTMLDivElement | null) => {
						shapesRef.current[1] = el;
					}}
					sx={{
						position: "absolute",
						top: "20%",
						right: "20%",
						width: 80,
						height: 80,
						borderRadius: 2,
						transform: "rotate(45deg)",
						border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
						background: alpha(theme.palette.primary.main, 0.05),
						backdropFilter: "blur(8px)",
					}}
				/>
				{/* Triangle shape */}
				<Box
					ref={(el: HTMLDivElement | null) => {
						shapesRef.current[2] = el;
					}}
					sx={{
						position: "absolute",
						bottom: "20%",
						left: "20%",
						width: 100,
						height: 100,
						borderRadius: 2,
						transform: "rotate(45deg)",
						border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
						background: alpha(theme.palette.primary.main, 0.05),
						backdropFilter: "blur(8px)",
					}}
				/>
				{/* Small circle */}
				<Box
					ref={(el: HTMLDivElement | null) => {
						shapesRef.current[3] = el;
					}}
					sx={{
						position: "absolute",
						bottom: "15%",
						right: "15%",
						width: 96,
						height: 96,
						borderRadius: "50%",
						border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
						background: alpha(theme.palette.primary.main, 0.03),
						backdropFilter: "blur(8px)",
					}}
				/>
				{/* Accent circle */}
				<Box
					ref={(el: HTMLDivElement | null) => {
						shapesRef.current[4] = el;
					}}
					sx={{
						position: "absolute",
						top: "60%",
						left: "60%",
						width: 48,
						height: 48,
						borderRadius: "50%",
						border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
						background: alpha(theme.palette.primary.main, 0.08),
						backdropFilter: "blur(8px)",
					}}
				/>
			</Box>

			{/* Content */}
			<Box
				sx={{
					position: "relative",
					zIndex: 20,
					textAlign: "center",
					maxWidth: 900,
					mx: "auto",
					pointerEvents: "auto",
				}}
			>
				<Typography
					ref={titleRef}
					variant="h1"
					sx={{
						fontFamily: '"Roboto Mono", monospace',
						fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
						fontWeight: 700,
						letterSpacing: "-0.02em",
						color: "text.primary",
						mb: 3,
						textShadow: `0 0 60px ${alpha(theme.palette.primary.main, 0.15)}`,
					}}
				>
					{titleWords.map((word, i) => (
						<Box
							key={i}
							component="span"
							sx={{
								display: "inline-block",
								mx: { xs: 0.5, md: 1 },
							}}
						>
							<Box
								component="span"
								className="hero-word"
								sx={{
									display: "inline-block",
									color: i === 0 ? "text.primary" : "transparent",
									backgroundImage:
										i === 1
											? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.text.primary})`
											: "none",
									backgroundClip: i === 1 ? "text" : "border-box",
									WebkitBackgroundClip: i === 1 ? "text" : "border-box",
									WebkitTextFillColor: i === 1 ? "transparent" : "inherit",
								}}
							>
								{word}
							</Box>
						</Box>
					))}
				</Typography>

				<Typography
					ref={subtitleRef}
					variant="body1"
					sx={{
						fontSize: { xs: "1rem", md: "1.25rem" },
						color: "text.secondary",
						maxWidth: 700,
						mx: "auto",
						mb: 6,
						lineHeight: 1.6,
					}}
				>
					5+ years of experience designing and shipping cross-platform mobile
					applications. Currently architecting AI-driven automation systems
					using n8n, FastAPI, and AI agents, with a strong foundation in cloud
					deployment, CI/CD, and Agile delivery.
				</Typography>

				<Button
					ref={ctaRef}
					variant="outlined"
					sx={{
						px: 4,
						py: 2,
						borderRadius: 8,
						borderColor: alpha(theme.palette.primary.main, 0.5),
						color: "text.primary",
						fontWeight: 500,
						letterSpacing: "0.05em",
						textTransform: "none",
						backgroundColor: alpha(theme.palette.primary.main, 0.05),
						backdropFilter: "blur(10px)",
						"&:hover": {
							borderColor: "primary.main",
							backgroundColor: alpha(theme.palette.primary.main, 0.1),
						},
					}}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					Explore My Work
				</Button>
			</Box>
		</Box>
	);
};

export default HeroSection;
