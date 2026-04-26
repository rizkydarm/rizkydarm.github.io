import {
	Analytics,
	Chat,
	ChevronLeft,
	ChevronRight,
	Cloud,
	Code,
	Close,
	GitHub,
	IntegrationInstructions,
	Language,
	Payments,
	PhotoLibrary,
	Psychology,
	Router,
	Security,
	Smartphone,
	Storage,
	SmartToy,
	Web,
} from "@mui/icons-material";
import {
	Box,
	Chip,
	CircularProgress,
	Dialog,
	IconButton,
	ImageList,
	ImageListItem,
	Typography,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import {
	SiAndroid,
	SiDocker,
	SiFirebase,
	SiFlutter,
	SiGatsby,
	SiJavascript,
	SiMaterialdesign,
	SiN8N,
	SiPostgresql,
	SiPython,
	SiReact,
	SiSupabase,
	SiTypescript,
} from "react-icons/si";

interface ProjectData {
	icon: string;
	title: string;
	description: string;
	githubUrl: string;
	tags: string[];
	date: string;
	images?: string[];
}

interface Project {
	icon: React.ReactNode;
	title: string;
	description: string;
	githubUrl: string;
	tags: string[];
	date: string;
	images?: string[];
}

const iconMap: Record<string, React.ReactNode> = {
	code: <Code sx={{ fontSize: 30 }} />,
	smartphone: <Smartphone sx={{ fontSize: 30 }} />,
	cloud: <Cloud sx={{ fontSize: 30 }} />,
	psychology: <Psychology sx={{ fontSize: 30 }} />,
	storage: <Storage sx={{ fontSize: 30 }} />,
	integration_instructions: <IntegrationInstructions sx={{ fontSize: 30 }} />,
	chat: <Chat sx={{ fontSize: 30 }} />,
	security: <Security sx={{ fontSize: 30 }} />,
	analytics: <Analytics sx={{ fontSize: 30 }} />,
	payments: <Payments sx={{ fontSize: 30 }} />,
	language: <Language sx={{ fontSize: 30 }} />,
	router: <Router sx={{ fontSize: 30 }} />,
	robot: <SmartToy sx={{ fontSize: 30 }} />,
	github: <GitHub sx={{ fontSize: 30 }} />,
	n8n: <SiN8N size={30} />,
	flutter: <SiFlutter size={30} />,
	typescript: <SiTypescript size={30} />,
	javascript: <SiJavascript size={30} />,
	android: <SiAndroid size={30} />,
	python: <SiPython size={30} />,
	firebase: <SiFirebase size={30} />,
	react: <SiReact size={30} />,
	docker: <SiDocker size={30} />,
	gatsby: <SiGatsby size={30} />,
	postgres: <SiPostgresql size={30} />,
	supabase: <SiSupabase size={30} />,
	material: <SiMaterialdesign size={30} />,
	web: <Web sx={{ fontSize: 30 }} />,
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
	const [imagesOpen, setImagesOpen] = useState(false);

	const handleOpenImages = () => setImagesOpen(true);
	const handleCloseImages = () => setImagesOpen(false);

	return (
		<Box
			sx={{
				position: "relative",
				p: 2,
				mx: 1,
				mb: 1,
				borderRadius: "1rem",
				// border: `1px solid ${cardBorder}`,
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
				minHeight: 240,
				minWidth: 300,
				maxHeight: 280,
				maxWidth: 400,
			}}
		>
			{/* Title row with icon */}
			<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 1 }}>
				<Typography
					variant="h6"
					sx={{
						fontFamily: '"Roboto Mono", monospace',
						fontWeight: 600,
						color: "text.primary",
						fontSize: "1.25rem",
						display: "-webkit-box",
						WebkitLineClamp: 2,
						WebkitBoxOrient: "vertical",
						overflow: "hidden",
						textOverflow: "ellipsis",
						flex: 1,
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
						width: 36,
						height: 36,
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
					lineHeight: 1.2,
					display: "-webkit-box",
					WebkitLineClamp: 4,
					WebkitBoxOrient: "vertical",
					overflow: "hidden",
					textOverflow: "ellipsis"
				}}
			>
				{project.description}
			</Typography>

			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: 1
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

			{/* Bottom row: Tags + Date (left) and GitHub button (right) */}
			<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mt: "auto", gap: 1 }}>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 1, justifyContent: "space-between" }}>
					

					{/* Date below tags */}
					<Typography
						variant="caption"
						sx={{
							fontFamily: '"Fira Code", monospace',
							fontSize: "0.75rem",
							color: "text.secondary",
							opacity: 0.7,
						}}
					>
						{project.date}
					</Typography>
				</Box>

				<Box sx={{ display: "flex", gap: 1 }}>
					<IconButton
						onClick={handleOpenImages}
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
						<PhotoLibrary sx={{ fontSize: 20 }} />
					</IconButton>
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

			{/* Images Dialog */}
			<Dialog
				open={imagesOpen}
				onClose={handleCloseImages}
				fullWidth
				maxWidth="lg"
				sx={{
					"& .MuiDialog-paper": {
						width: "80%",
						height: "80%",
						maxWidth: "80%",
						maxHeight: "80%",
						m: 0,
						backgroundColor: alpha(theme.palette.background.paper, 0.95),
						backdropFilter: "blur(20px)",
					},
				}}
			>
				<Box sx={{ p: 2, height: "100%", display: "flex", flexDirection: "column" }}>
					<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
						<Typography variant="h6" sx={{ fontFamily: '"Roboto Mono", monospace' }}>
							{project.title} - Images
						</Typography>
						<IconButton onClick={handleCloseImages} sx={{ color: "text.primary" }}>
							<Close />
						</IconButton>
					</Box>
					<Box sx={{ flex: 1, overflow: "auto" }}>
					{project.images && project.images.length > 0 ? (
						<ImageList variant="masonry" cols={2} gap={16}>
							{project.images.map((img, idx) => (
								<ImageListItem key={idx}>
									<img
										src={img}
										alt={`${project.title} screenshot ${idx + 1}`}
										loading="lazy"
										style={{ borderRadius: "8px", width: "100%", height: "auto" }}
									/>
								</ImageListItem>
							))}
						</ImageList>
					) : (
						<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
							<Typography variant="body1" sx={{ color: "text.secondary", fontFamily: '"Roboto Mono", monospace' }}>
								No images
							</Typography>
						</Box>
					)}
				</Box>
				</Box>
			</Dialog>
		</Box>
	);
};

const chunkArray = <T,>(arr: T[], size: number): T[][] =>
	Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
		arr.slice(i * size, i * size + size),
	);

const ProjectsSection: React.FC = () => {
	const theme = useTheme();
	const [currentSlide, setCurrentSlide] = useState(0);
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
			setCurrentSlide(currentSlide - 1);
		}
	};

	const handleNext = () => {
		if (currentSlide < totalPages - 1) {
			setCurrentSlide(currentSlide + 1);
		}
	};

	const handleDotClick = (page: number) => {
		setCurrentSlide(page);
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
				py: 0,
				pt: { xs: 8, md: 10 },
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
					mb: 1,
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
							height: "100%",
							maxWidth: "1350px",
							mx: "auto",
							display: "flex",
							alignItems: "center",
							gap: 0,
							px: 0,
							py: 0,
						}}
					>
						<IconButton
							onClick={handlePrev}
							disabled={currentSlide === 0}
							sx={arrowBtnSx}
						>
							<ChevronLeft />
						</IconButton>

						<Box sx={{ flex: 1, overflow: "hidden", height: "100%" }}>
							<Box
								sx={{
									display: "flex",
									transform: `translateX(-${currentSlide * 100}%)`,
									transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
									height: "100%",
								}}
							>
								{projectPages.map((page, idx) => (
									<Box
										key={idx}
										sx={{
											flexShrink: 0,
											width: "100%",
											display: "grid",
											gridTemplateColumns: "repeat(3, 1fr)",
											gridTemplateRows: "repeat(2, 1fr)",
											gap: 2,
											p: 2,
										}}
									>
										{page.map((project) => (
											<ProjectCard key={project.title} project={project} />
										))}
									</Box>
								))}
							</Box>
						</Box>

						<IconButton
							onClick={handleNext}
							disabled={currentSlide >= totalPages - 1}
							sx={arrowBtnSx}
						>
							<ChevronRight />
						</IconButton>
					</Box>
				</>
			)}
		</Box>
	);
};

export default ProjectsSection;
