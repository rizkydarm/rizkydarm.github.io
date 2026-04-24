import React, { useRef } from "react";
import { Box, Typography, Chip, IconButton } from "@mui/material";
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

interface Project {
	icon: React.ReactNode;
	title: string;
	description: string;
	githubUrl: string;
	tags: string[];
	date: string;
}

const projects: Project[] = [
	{
		icon: <Smartphone sx={{ fontSize: 40 }} />,
		title: "Mobile Banking App",
		description: "A secure and intuitive mobile banking application built with Flutter. Features include biometric authentication, real-time transaction tracking, QR code payments, and AI-powered financial insights.",
		githubUrl: "https://github.com/rizkydarm/mobile-banking",
		tags: ["Flutter", "Dart", "Firebase"],
		date: "April 2026"
	},
	{
		icon: <Cloud sx={{ fontSize: 40 }} />,
		title: "Cloud Dashboard",
		description: "Comprehensive cloud infrastructure monitoring dashboard built with React and TypeScript. Visualizes AWS resource usage, cost analytics, and real-time alerts with interactive charts.",
		githubUrl: "https://github.com/rizkydarm/cloud-dashboard",
		tags: ["React", "TypeScript", "AWS"],
		date: "January 2026"
	},
	{
		icon: <Psychology sx={{ fontSize: 40 }} />,
		title: "AI Automation System",
		description: "Intelligent workflow automation platform leveraging n8n and custom FastAPI endpoints. Automates repetitive tasks, data extraction, and integrates with multiple third-party services.",
		githubUrl: "https://github.com/rizkydarm/ai-automation",
		tags: ["Python", "FastAPI", "n8n"],
		date: "December 2025"
	},
	{
		icon: <Storage sx={{ fontSize: 40 }} />,
		title: "Data Pipeline",
		description: "Scalable ETL pipeline for processing millions of records daily. Orchestrates data flow from multiple sources to PostgreSQL warehouse with Docker containerization.",
		githubUrl: "https://github.com/rizkydarm/data-pipeline",
		tags: ["Node.js", "PostgreSQL", "Docker"],
		date: "November 2025"
	},
	{
		icon: <IntegrationInstructions sx={{ fontSize: 40 }} />,
		title: "CI/CD Platform",
		description: "End-to-end DevOps automation platform with GitHub Actions workflows, Terraform infrastructure provisioning, and Kubernetes deployment orchestration for microservices.",
		githubUrl: "https://github.com/rizkydarm/cicd-platform",
		tags: ["GitHub Actions", "Terraform", "K8s"],
		date: "October 2025"
	},
	{
		icon: <Code sx={{ fontSize: 40 }} />,
		title: "Portfolio Website",
		description: "Personal portfolio built with Gatsby and Material UI featuring glassmorphism design, smooth scroll animations, and responsive layout optimized for all devices.",
		githubUrl: "https://github.com/rizkydarm/portfolio",
		tags: ["Gatsby", "React", "MUI"],
		date: "September 2025"
	},
	{
		icon: <Chat sx={{ fontSize: 40 }} />,
		title: "Real-time Chat App",
		description: "Full-stack messaging application with Socket.io for real-time communication. Features include group chats, message persistence with Redis, and typing indicators.",
		githubUrl: "https://github.com/rizkydarm/chat-app",
		tags: ["Socket.io", "Express", "Redis"],
		date: "August 2025"
	},
	{
		icon: <Security sx={{ fontSize: 40 }} />,
		title: "Auth Service",
		description: "Microservice handling authentication and authorization with OAuth2 and JWT. Provides secure token management, session handling, and multi-provider login support.",
		githubUrl: "https://github.com/rizkydarm/auth-service",
		tags: ["OAuth2", "JWT", "Go"],
		date: "July 2025"
	},
	{
		icon: <Analytics sx={{ fontSize: 40 }} />,
		title: "Analytics Platform",
		description: "High-performance analytics dashboard powered by ClickHouse for OLAP queries. Real-time data visualization with Grafana and event streaming via Apache Kafka.",
		githubUrl: "https://github.com/rizkydarm/analytics",
		tags: ["ClickHouse", "Grafana", "Kafka"],
		date: "June 2025"
	},
	{
		icon: <Payments sx={{ fontSize: 40 }} />,
		title: "Payment Gateway",
		description: "Payment processing service integrating Stripe API with custom webhook handling. Supports multiple currencies, subscription billing, and automated invoicing.",
		githubUrl: "https://github.com/rizkydarm/payment-gateway",
		tags: ["Stripe", "Node.js", "MongoDB"],
		date: "May 2025"
	},
	{
		icon: <Language sx={{ fontSize: 40 }} />,
		title: "CMS Platform",
		description: "Headless content management system built with Next.js and Prisma. Features rich text editing, media management, role-based access, and GraphQL API for content delivery.",
		githubUrl: "https://github.com/rizkydarm/cms-platform",
		tags: ["Next.js", "Prisma", "PostgreSQL"],
		date: "April 2025"
	},
	{
		icon: <Router sx={{ fontSize: 40 }} />,
		title: "IoT Device Manager",
		description: "IoT fleet management platform for monitoring and controlling Raspberry Pi devices. Uses MQTT for lightweight messaging and provides real-time device telemetry.",
		githubUrl: "https://github.com/rizkydarm/iot-manager",
		tags: ["MQTT", "Raspberry Pi", "Python"],
		date: "March 2025"
	},
];

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
		arr.slice(i * size, i * size + size)
	);

const ProjectsSection: React.FC = () => {
	const theme = useTheme();
	const gliderRef = useRef<GliderMethods>(null);
	const [currentSlide, setCurrentSlide] = React.useState(0);
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
		</Box>
	);
};

export default ProjectsSection;
