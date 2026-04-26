import { Box } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { animate, random } from "animejs";
import React from "react";
import { useEffect, useRef, useState } from "react";

const FloatingShapesBackground: React.FC = () => {
	const theme = useTheme();
	const shapesRef = useRef<(HTMLDivElement | null)[]>([]);
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		setIsReady(true);
	}, []);

	useEffect(() => {
		if (!isReady) return;

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

	return (
		<Box
			sx={{
				position: "fixed",
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
	);
};

export default FloatingShapesBackground;
