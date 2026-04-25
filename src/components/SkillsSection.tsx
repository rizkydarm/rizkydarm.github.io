import {
	AccountTree,
	BugReport,
	Code,
	Construction,
	DesignServices,
	Groups,
	Psychology,
	SmartToy,
	Storage,
	Terminal,
} from "@mui/icons-material";
import { Box, Chip, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import React from "react";

interface SkillCategory {
	icon: React.ReactNode;
	title: string;
	skills: string[];
}

const skillCategories: SkillCategory[] = [
	{
		icon: <Code sx={{ fontSize: 28 }} />,
		title: "Frontend",
		skills: [
			"Flutter",
			"React Native",
			"UIKit/SwiftUI",
			"Jetpack Compose",
			"ReactJS",
			"NextJS",
			"Tauri",
		],
	},
	{
		icon: <Storage sx={{ fontSize: 28 }} />,
		title: "Backend / Database",
		skills: [
			"ExpressJS",
			"ElysiaJS",
			"FastAPI",
			"MySQL",
			"PostgreSQL",
			"SQLite",
			"MongoDB",
			"Firebase",
		],
	},
	{
		icon: <Terminal sx={{ fontSize: 28 }} />,
		title: "Languages",
		skills: [
			"JavaScript/TypeScript",
			"Python",
			"Dart",
			"Swift",
			"Kotlin",
			"C/C++",
			"C#",
			"Java",
		],
	},
	{
		icon: <AccountTree sx={{ fontSize: 28 }} />,
		title: "Software / Architecture",
		skills: [
			"Git",
			"GitHub",
			"Docker",
			"Linux",
			"VPS",
			"Data Structure",
			"OOP",
			"SDLC",
			"MVVM",
			"Clean Code",
			"BLoC",
			"SOLID",
		],
	},
	{
		icon: <Psychology sx={{ fontSize: 28 }} />,
		title: "AI Development",
		skills: [
			"Deep Learning",
			"LLM",
			"TensorFlow",
			"PyTorch",
			"OpenCV",
			"CoreML",
			"MLKit",
		],
	},
	{
		icon: <SmartToy sx={{ fontSize: 28 }} />,
		title: "AI Tools / Agents",
		skills: [
			"Claude",
			"OpenAI Codex",
			"Copilot",
			"Gemini",
			"Ollama",
			"Opencode",
			"MCP Tools",
			"AI Skills",
			"OpenClaw",
			"n8n",
		],
	},
	{
		icon: <Groups sx={{ fontSize: 28 }} />,
		title: "Project Management",
		skills: ["Agile", "Scrum", "Jira", "Trello", "Notion"],
	},
	{
		icon: <Construction sx={{ fontSize: 28 }} />,
		title: "CI/CD",
		skills: ["GitHub Actions", "Bitrise", "CodeMagic", "CircleCI"],
	},
	{
		icon: <BugReport sx={{ fontSize: 28 }} />,
		title: "QA / Testing",
		skills: ["Postman", "Playwright", "Sentry"],
	},
	{
		icon: <DesignServices sx={{ fontSize: 28 }} />,
		title: "UI Design",
		skills: ["Figma", "Penpot", "Stitch", "BuilderIO", "Locofy"],
	},
];

const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => {
	const theme = useTheme();
	const cardBg = alpha(theme.palette.background.paper, 0.35);
	const cardBorder = alpha(theme.palette.primary.main, 0.2);
	const cardHoverBg = alpha(theme.palette.primary.main, 0.08);

	return (
		<Box
			sx={{
				position: "relative",
				p: 2,
				borderRadius: "0.75rem",
				border: `1px solid ${cardBorder}`,
				backdropFilter: "blur(20px) saturate(200%)",
				WebkitBackdropFilter: "blur(20px) saturate(200%)",
				backgroundColor: cardBg,
				boxShadow: `0 4px 24px ${alpha(theme.palette.common.black, 0.2)}, inset 0 1px 0 ${alpha(theme.palette.common.white, 0.15)}`,
				transition: "all 0.3s ease",
				"&:hover": {
					backgroundColor: cardHoverBg,
					borderColor: alpha(theme.palette.primary.main, 0.4),
					transform: "scale(1.02)",
					boxShadow: `0 6px 24px ${alpha(theme.palette.common.black, 0.25)}, inset 0 1px 0 ${alpha(theme.palette.common.white, 0.1)}`,
				},
				display: "flex",
				flexDirection: "column",
				gap: 1.5,
				height: "100%",
			}}
		>
			{/* Top row: Title (left) + Icon (right) */}
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Typography
					variant="subtitle1"
					sx={{
						fontFamily: '"Roboto Mono", monospace',
						fontWeight: 600,
						color: "text.primary",
						fontSize: "0.9rem",
						flex: 1,
						pr: 1,
						lineHeight: 1.3,
					}}
				>
					{category.title}
				</Typography>
				<Box
					sx={{
						color: "primary.main",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: 36,
						height: 36,
						borderRadius: "0.5rem",
						backgroundColor: alpha(theme.palette.primary.main, 0.1),
						border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
						flexShrink: 0,
					}}
				>
					{category.icon}
				</Box>
			</Box>

			{/* Skills */}
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: 0.75,
				}}
			>
				{category.skills.map((skill) => (
					<Chip
						key={skill}
						label={skill}
						size="small"
						sx={{
							fontFamily: '"Fira Code", monospace',
							fontSize: "0.7rem",
							fontWeight: 500,
							backgroundColor: alpha(theme.palette.primary.main, 0.1),
							color: "primary.main",
							border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
							borderRadius: "0.375rem",
							height: 22,
							"& .MuiChip-label": {
								px: 1,
								py: 0.25,
							},
						}}
					/>
				))}
			</Box>
		</Box>
	);
};

const SkillsSection: React.FC = () => {
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
				justifyContent: "flex-start",
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
					mb: 3,
					mt: 2,
				}}
			>
				Skills
			</Typography>

			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(5, 1fr)",
					gridTemplateRows: "repeat(2, 1fr)",
					gap: 1.5,
					width: "100%",
					maxWidth: 1400,
					height: "calc(100vh - 220px)",
					maxHeight: 500,
					mx: "auto",
				}}
			>
				{skillCategories.map((category) => (
					<SkillCard key={category.title} category={category} />
				))}
			</Box>
		</Box>
	);
};

export default SkillsSection;
