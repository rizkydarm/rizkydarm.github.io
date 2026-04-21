import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
	Box,
	Typography,
	CssBaseline,
} from "@mui/material";
import {
	createTheme,
	ThemeProvider,
} from "@mui/material/styles";
import ParticleBackground from "../components/ParticleBackground";
import PolkadotBackground from "../components/PolkadotBackground";
import GlassNavbar from "../components/GlassNavbar";

const IndexPage: React.FC<PageProps> = () => {
	const [isDarkMode, setIsDarkMode] = React.useState(true);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode: isDarkMode ? "dark" : "light",
					background: {
						default: isDarkMode ? "#000000" : "#ffffff",
						paper: isDarkMode ? "#1a1a1a" : "#f5f5f5",
					},
				},
			}),
		[isDarkMode]
	);

	const toggleTheme = () => {
		setIsDarkMode((prev) => !prev);
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<PolkadotBackground isDarkMode={isDarkMode} />
			
			<GlassNavbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

			{/* Main Content */}
			<Box sx={{ pt: "100px", px: 3 }}>
				<Typography variant="h3" sx={{ mb: 4, color: isDarkMode ? "#fff" : "#000" }}>
					Welcome to my Portfolio
				</Typography>
			</Box>
		</ThemeProvider>
	);
};

export default IndexPage;

export const Head: HeadFC = () => (
	<title>{`Rizky Darmawan | Software Engineer`}</title>
);
