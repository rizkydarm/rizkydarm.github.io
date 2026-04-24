import { ArrowOutward, Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import type React from "react";

interface ContactItem {
	icon: React.ReactNode;
	title: string;
	value: string;
	url: string;
	color: string;
}

const contactItems: ContactItem[] = [
	{
		icon: <Email sx={{ fontSize: 32 }} />,
		title: "Email",
		value: "rizkydarm.000@gmail.com",
		url: "mailto:rizkydarm.000@gmail.com",
		color: "#EA4335",
	},
	{
		icon: <GitHub sx={{ fontSize: 32 }} />,
		title: "GitHub",
		value: "github.com/rizkydarm",
		url: "https://github.com/rizkydarm",
		color: "#FFFFFF",
	},
	{
		icon: <LinkedIn sx={{ fontSize: 32 }} />,
		title: "LinkedIn",
		value: "linkedin.com/in/rizkydarm",
		url: "https://linkedin.com/in/rizkydarm",
		color: "#0A66C2",
	},
];

const ContactCard: React.FC<{ item: ContactItem }> = ({ item }) => {
	const theme = useTheme();
	const isDark = theme.palette.mode === "dark";
	const cardBg = alpha(theme.palette.background.paper, 0.35);
	const cardBorder = alpha(theme.palette.primary.main, 0.2);
	const cardHoverBg = alpha(theme.palette.primary.main, 0.08);

	const handleClick = () => {
		window.open(item.url, "_blank", "noopener,noreferrer");
	};

	return (
		<Box
			onClick={handleClick}
			sx={{
				position: "relative",
				p: 2.5,
				borderRadius: "1rem",
				border: `1px solid ${cardBorder}`,
				backdropFilter: "blur(20px) saturate(200%)",
				WebkitBackdropFilter: "blur(20px) saturate(200%)",
				backgroundColor: cardBg,
				boxShadow: `0 4px 24px ${alpha(theme.palette.common.black, 0.2)}, inset 0 1px 0 ${alpha(theme.palette.common.white, 0.15)}`,
				transition: "all 0.3s ease",
				cursor: "pointer",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 1.5,
				minWidth: 200,
				flex: 1,
				maxWidth: 280,
				"&:hover": {
					backgroundColor: cardHoverBg,
					borderColor: alpha(item.color, 0.5),
					transform: "translateY(-4px) scale(1.02)",
					boxShadow: `0 8px 32px ${alpha(item.color, 0.2)}, inset 0 1px 0 ${alpha(theme.palette.common.white, 0.1)}`,
				},
			}}
		>
			{/* Icon Container */}
			<Box
				sx={{
					width: 64,
					height: 64,
					borderRadius: "50%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: alpha(item.color, 0.15),
					border: `1px solid ${alpha(item.color, 0.3)}`,
					color: item.color,
					transition: "all 0.3s ease",
					"&:hover": {
						backgroundColor: alpha(item.color, 0.25),
						transform: "scale(1.05)",
					},
				}}
			>
				{item.icon}
			</Box>

			{/* Title */}
			<Typography
				variant="h6"
				sx={{
					fontFamily: '"Roboto Mono", monospace',
					fontWeight: 600,
					fontSize: "1rem",
					color: "text.primary",
				}}
			>
				{item.title}
			</Typography>

			{/* Value */}
			<Typography
				variant="body2"
				sx={{
					fontFamily: '"Fira Code", monospace',
					fontSize: "0.8rem",
					color: "text.secondary",
					textAlign: "center",
					wordBreak: "break-word",
				}}
			>
				{item.value}
			</Typography>

			{/* Arrow indicator */}
			<IconButton
				sx={{
					width: 32,
					height: 32,
					borderRadius: "50%",
					backgroundColor: alpha(item.color, 0.1),
					color: item.color,
					mt: "auto",
					transition: "all 0.3s ease",
					"&:hover": {
						backgroundColor: alpha(item.color, 0.2),
					},
				}}
			>
				<ArrowOutward sx={{ fontSize: 18 }} />
			</IconButton>
		</Box>
	);
};

const ContactSection: React.FC = () => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				position: "relative",
				zIndex: 10,
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				px: { xs: 2, sm: 3, md: 6 },
				py: 3,
				pt: { xs: 10, md: 12 },
				scrollSnapAlign: "start",
				scrollSnapStop: "always",
				boxSizing: "border-box",
				overflow: "hidden",
			}}
		>
			<Typography
				variant="h1"
				sx={{
					fontFamily: '"Roboto Mono", monospace',
					fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
					fontWeight: 700,
					letterSpacing: "-0.02em",
					color: "transparent",
					backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.text.primary})`,
					backgroundClip: "text",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					textAlign: "center",
					mb: 2,
				}}
			>
				Get In Touch
			</Typography>

			<Typography
				variant="body1"
				sx={{
					fontFamily: '"Fira Code", monospace',
					fontSize: "0.9rem",
					color: "text.secondary",
					textAlign: "center",
					mb: 4,
					maxWidth: 500,
				}}
			>
				Have a project in mind? Let&apos;s collaborate and build something
				amazing together.
			</Typography>

			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					gap: 2,
					width: "100%",
					maxWidth: 900,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{contactItems.map((item) => (
					<ContactCard key={item.title} item={item} />
				))}
			</Box>
		</Box>
	);
};

export default ContactSection;
