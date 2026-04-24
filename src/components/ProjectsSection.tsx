import React, { useRef, useState, useEffect } from "react";
import {
	Box,
	Typography,
	Chip,
	IconButton,
	CircularProgress,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import {
	Code,
	Smartphone,
	Cloud,
	Psychology,
	Storage,
	IntegrationInstructions,
	Chat,
	Security,
	Analytics,
	Payments,
	Language,
	Router,
	ChevronLeft,
	ChevronRight,
	GitHub,
} from "@mui/icons-material";
import Glider from "react-glider";
import type { GliderMethods } from "react-glider/dist/types";
import "glider-js/glider.min.css";
import {
	SiN8N,
	SiFlutter,
	SiTypescript,
	SiJavascript,
	SiAndroid,
	SiPython,
	SiReact,
	SiFirebase,
	SiPostgresql,
	SiSupabase,
	SiDocker,
	SiGatsby,
} from "react-icons/si";

interface ProjectData {
	icon: string;
	title: string;
	description: string;
	githubUrl: string;
	tags: string[];
	date: string;
}

interface Project {
	icon: React.ReactNode;
	title: string;
	description: string;
	githubUrl: string;
	tags: string[];
	date: string;
}

const iconMap: Record<string, React.ReactNode> = {
	code: <Code sx={{ fontSize: 40 }} />,
	smartphone: <Smartphone sx={{ fontSize: 40 }} />,
	cloud: <Cloud sx={{ fontSize: 40 }} />,
	psychology: <Psychology sx={{ fontSize: 40 }} />,
	storage: <Storage sx={{ fontSize: 40 }} />,
	integration_instructions: <IntegrationInstructions sx={{ fontSize: 40 }} />,
	chat: <Chat sx={{ fontSize: 40 }} />,
	security: <Security sx={{ fontSize: 40 }} />,
	analytics: <Analytics sx={{ fontSize: 40 }} />,
	payments: <Payments sx={{ fontSize: 40 }} />,
	language: <Language sx={{ fontSize: 40 }} />,
	router: <Router sx={{ fontSize: 40 }} />,
	github: <GitHub sx={{ fontSize: 40 }} />,
	n8n: <SiN8N size={40} />,
	flutter: <SiFlutter size={40} />,
	typescript: <SiTypescript size={40} />,
	javascript: <SiJavascript size={40} />,
	android: <SiAndroid size={40} />,
	python: <SiPython size={40} />,
	firebase: <SiFirebase size={40} />,
	react: <SiReact size={40} />,
	docker: <SiDocker size={40} />,
	gatsby: <SiGatsby size={40} />,
	postgres: <SiPostgresql size={40} />,
	supabase: <SiSupabase size={40} />,
};

const convertProjectData = (data: ProjectData): Project => ({
	...data,
	icon: iconMap[data.icon] || <Code sx={{ fontSize: 40 }} />,
});

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
	const theme = useTheme();
	const cardBg = alpha(theme.palette.background.paper, 0.35);
	const cardBorder = alpha(theme.palette.primary.main, 0.2);
	const cardHoverBg = alpha(theme.palette.primary.main, 0.08);

	return (
		<Box
			sx={{
				position: "relative",
				p: 3,
				borderRadius: "1rem",
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
					boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.3)}, inset 0 1px 0 ${alpha(theme.palette.common.white, 0.1)}`,
				},
				display: "flex",
				flexDirection: "column",
				gap: 2,
				height: "100%",
			}}
		>
			{/* Top row: Title (left) + Icon (right) */}
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-start",
				}}
			>
				<Typography
					variant="h6"
					sx={{
						fontFamily: '"Roboto Mono", monospace',
						fontWeight: 600,
						color: "text.primary",
						fontSize: "1.25rem",
						flex: 1,
						pr: 2,
					}}
				>
					{project.title}
				</Typography>
				<Box
					sx={{
						color: "primary.main",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: 48,
						height: 48,
						borderRadius: "0.75rem",
						backgroundColor: alpha(theme.palette.primary.main, 0.1),
						border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
						flexShrink: 0,
					}}
				>
					{project.icon}
				</Box>
			</Box>

			{/* Description */}
			<Typography
				variant="body2"
				sx={{
					fontFamily: '"Fira Code", monospace',
					fontSize: "0.875rem",
					color: "text.secondary",
					lineHeight: 1.6,
					display: "-webkit-box",
					WebkitLineClamp: 3,
					WebkitBoxOrient: "vertical",
					overflow: "hidden",
					textOverflow: "ellipsis",
					flex: 1,
				}}
			>
				{project.description}
			</Typography>

			{/* Bottom row: Tags (left) + GitHub button (right) */}
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					mt: "auto",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						gap: 1,
						flex: 1,
					}}
				>
					{project.tags.map((tag) => (
						<Chip
							key={tag}
							label={tag}
							size="small"
							sx={{
								fontFamily: '"Fira Code", monospace',
								fontSize: "0.75rem",
								fontWeight: 500,
								backgroundColor: alpha(theme.palette.primary.main, 0.1),
								color: "primary.main",
								border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
								borderRadius: "0.5rem",
								"& .MuiChip-label": {
									px: 1.5,
								},
							}}
						/>
					))}
				</Box>

				<IconButton
					href={project.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					sx={{
						width: 36,
						height: 36,
						borderRadius: "0.5rem",
						border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
						backgroundColor: alpha(theme.palette.background.paper, 0.5),
						color: "primary.main",
						transition: "all 0.2s ease",
						flexShrink: 0,
						"&:hover": {
							backgroundColor: alpha(theme.palette.primary.main, 0.15),
							borderColor: alpha(theme.palette.primary.main, 0.5),
							transform: "scale(1.05)",
						},
					}}
				>
					<GitHub sx={{ fontSize: 20 }} />
				</IconButton>
			</Box>
		</Box>
	);
};

const chunkArray = <T,>(arr: T[], size: number): T[][] =>
	Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
		arr.slice(i * size, i * size + size),
	);

const ProjectsSection: React.FC = () => {
	const theme = useTheme();
	const gliderRef = useRef<GliderMethods>(null);
	const [currentSlide, setCurrentSlide] = React.useState(0);
	const [projects, setProjects] = useState<Project[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/portfolio.json")
			.then((r) => r.json())
			.then((data: { projects: ProjectData[] }) => {
				const converted = data.projects.map(convertProjectData);
				setProjects(converted);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, []);

	const projectPages = chunkArray(projects, 6);
	const totalPages = projectPages.length;

	const handlePrev = () => {
		if (currentSlide > 0) {
			gliderRef.current?.scrollItem(currentSlide - 1);
		}
	};

	const handleNext = () => {
		if (currentSlide < totalPages - 1) {
			gliderRef.current?.scrollItem(currentSlide + 1);
		}
	};

	const handleDotClick = (page: number) => {
		gliderRef.current?.scrollItem(page);
	};

	const arrowBtnSx = {
		width: 48,
		height: 48,
		borderRadius: "50%",
		border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
		backgroundColor: alpha(theme.palette.background.paper, 0.5),
		backdropFilter: "blur(10px)",
		color: "primary.main",
		transition: "all 0.3s ease",
		"&:hover": {
			backgroundColor: alpha(theme.palette.primary.main, 0.1),
			borderColor: alpha(theme.palette.primary.main, 0.5),
			transform: "scale(1.05)",
		},
		"&:disabled": {
			opacity: 0.3,
			borderColor: alpha(theme.palette.primary.main, 0.1),
		},
	};

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
					mb: 2,
					mt: 2,
				}}
			>
				Projects
			</Typography>

			{loading && (
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flex: 1,
					}}
				>
					<CircularProgress />
				</Box>
			)}

			{!loading && projects.length === 0 && (
				<Typography
					variant="body1"
					sx={{ color: "text.secondary", textAlign: "center" }}
				>
					No projects found.
				</Typography>
			)}

			{!loading && projects.length > 0 && (
				<>
					<Box
						sx={{
							position: "relative",
							width: "100%",
							maxWidth: 2000,
							mx: "auto",
							display: "flex",
							alignItems: "center",
							gap: 0,
						}}
					>
						<IconButton
							onClick={handlePrev}
							disabled={currentSlide === 0}
							sx={arrowBtnSx}
						>
							<ChevronLeft />
						</IconButton>

						<Box sx={{ flex: 1, overflow: "hidden" }}>
							<Glider
								ref={gliderRef}
								draggable={false}
								scrollLock
								slidesToShow={1}
								slidesToScroll={1}
								onSlideVisible={(e) => {
									setCurrentSlide(e.detail.slide);
								}}
								className="glider-projects"
							>
								{projectPages.map((page, idx) => (
									<Box
										key={idx}
										sx={{
											display: "grid",
											gridTemplateColumns: "repeat(3, 1fr)",
											gridTemplateRows: "repeat(2, 1fr)",
											gap: 1.5,
											p: 2,
											height: "calc(100vh - 280px)",
											maxHeight: 520,
										}}
									>
										{page.map((project) => (
											<ProjectCard key={project.title} project={project} />
										))}
									</Box>
								))}
							</Glider>
						</Box>

						<IconButton
							onClick={handleNext}
							disabled={currentSlide >= totalPages - 1}
							sx={arrowBtnSx}
						>
							<ChevronRight />
						</IconButton>
					</Box>

					<Box
						sx={{
							display: "flex",
							gap: 1.5,
							mt: 2,
							mb: 2,
							flexShrink: 0,
						}}
					>
						{Array.from({ length: totalPages }).map((_, i) => (
							<Box
								key={i}
								onClick={() => handleDotClick(i)}
								sx={{
									width: 12,
									height: 12,
									borderRadius: "50%",
									cursor: "pointer",
									transition: "all 0.3s ease",
									backgroundColor:
										i === currentSlide
											? theme.palette.primary.main
											: alpha(theme.palette.primary.main, 0.3),
									"&:hover": {
										backgroundColor:
											i === currentSlide
												? theme.palette.primary.main
												: alpha(theme.palette.primary.main, 0.5),
										transform: "scale(1.2)",
									},
								}}
							/>
						))}
					</Box>
				</>
			)}
		</Box>
	);
};

export default ProjectsSection;
