import { alpha, Box, CssBaseline, Typography } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import ContactSection from "../components/ContactSection";
import GlassNavbar from "../components/GlassNavbar";
import HeroSection from "../components/HeroSection";
import ParticleBackground from "../components/ParticleBackground";
import PolkadotBackground from "../components/PolkadotBackground";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";

const IndexPage: React.FC<PageProps> = () => {
	const [isDarkMode, setIsDarkMode] = React.useState(true);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode: isDarkMode ? "dark" : "light",
					background: {
						default: isDarkMode ? "#131313" : "#ffffff",
						paper: isDarkMode ? "#1C1B1B" : "#f5f5f5",
					},
					primary: {
						main: "#19D9B6",
						contrastText: "#ffffff",
					},
					secondary: {
						main: "#28DFBB",
					},
					text: {
						primary: isDarkMode ? "#E5E2E1" : "#131313",
						secondary: isDarkMode ? "#C6C6C6" : "#474747",
					},
					divider: isDarkMode ? "rgba(71, 71, 71, 0.2)" : "rgba(0, 0, 0, 0.12)",
				},
				typography: {
					fontFamily: '"Fira Code", monospace',
					h3: {
						fontFamily: '"Roboto Mono", monospace',
						letterSpacing: "-0.02em",
					},
					body1: {
						fontFamily: '"Fira Code", monospace',
						lineHeight: 1.6,
					},
					body2: {
						fontFamily: '"Fira Code", monospace',
					},
					subtitle2: {
						fontFamily: '"Fira Code", monospace',
					},
				},
			}),
		[isDarkMode],
	);

	const toggleTheme = () => {
		setIsDarkMode((prev) => !prev);
	};

	const Section: React.FC<{ id: string; title: string; isLast?: boolean }> = ({
		id,
		title,
		isLast,
	}) => {
		const sectionTheme = useTheme();
		return (
			<Box
				id={id}
				sx={{
					position: "relative",
					zIndex: 10,
					minHeight: "100vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					px: 3,
					scrollSnapAlign: "start",
					scrollSnapStop: "always",
				}}
			>
				<Typography
					variant="h1"
					sx={{
						fontFamily: '"Roboto Mono", monospace',
						fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
						fontWeight: 700,
						letterSpacing: "-0.02em",
						color: "transparent",
						backgroundImage: `linear-gradient(135deg, ${sectionTheme.palette.primary.main}, ${sectionTheme.palette.text.primary})`,
						backgroundClip: "text",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						textAlign: "center",
					}}
				>
					{title}
				</Typography>
			</Box>
		);
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<PolkadotBackground isDarkMode={isDarkMode} />

			<GlassNavbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

			{/* Main Content with Full-Page Scroll */}
			<Box
				sx={{
					height: "100vh",
					overflowY: "scroll",
					scrollSnapType: "y mandatory",
					scrollBehavior: "smooth",
				}}
			>
				<Box
					id="home"
					sx={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
				>
					<HeroSection />
				</Box>
				<Box
					id="projects"
					sx={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
				>
					<ProjectsSection />
				</Box>
				<Box
					id="skills"
					sx={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
				>
					<SkillsSection />
				</Box>
				<Box
					id="contact"
					sx={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
				>
					<ContactSection />
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default IndexPage;

export const Head: HeadFC = () => (
	<>
		<title>{`Rizky Darmawan | Software Engineer`}</title>
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link
			rel="preconnect"
			href="https://fonts.gstatic.com"
			crossOrigin="anonymous"
		/>
		<link
			href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@400;500;600&family=Roboto+Mono:wght@400;500;700&display=swap"
			rel="stylesheet"
		/>
	</>
);
