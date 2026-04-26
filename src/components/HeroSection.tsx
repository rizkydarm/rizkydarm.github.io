import { Box, Button, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { animate } from "animejs";
import React from "react";
import { useRef } from "react";

const HeroSection: React.FC = () => {
	const theme = useTheme();
	const titleRef = useRef<HTMLDivElement>(null);
	const subtitleRef = useRef<HTMLDivElement>(null);
	const ctaRef = useRef<HTMLButtonElement>(null);

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
