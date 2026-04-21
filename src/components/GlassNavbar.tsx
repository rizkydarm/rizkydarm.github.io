import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

interface GlassNavbarProps {
	isDarkMode: boolean;
	toggleTheme: () => void;
}

const FAVICON_URL = "/favicon.png";
const AVATAR_URL = "/avatar.jpg";

const GlassNavbar: React.FC<GlassNavbarProps> = ({ isDarkMode, toggleTheme }) => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = ["Projects", "Skills", "Contact"];

	const bgColor = isDarkMode
		? scrolled
			? "rgba(20, 20, 25, 0.6)"
			: "rgba(15, 15, 20, 0.35)"
		: scrolled
			? "rgba(255, 255, 255, 0.65)"
			: "rgba(255, 255, 255, 0.35)";

	const textColor = isDarkMode ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)";
	const textHoverColor = isDarkMode ? "rgba(255, 255, 255, 0.95)" : "rgba(0, 0, 0, 0.95)";
	const navHoverBg = isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)";
	const borderColor = isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.1)";
	const avatarBorder = isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)";

	return (
		<nav
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				zIndex: 1000,
				paddingTop: scrolled ? "0.75rem" : "1rem",
				paddingBottom: scrolled ? "0.75rem" : "1rem",
				paddingLeft: "1rem",
				paddingRight: "1rem",
				transition: "all 0.5s ease",
			}}
		>
			<Box
				sx={{
					mx: "auto",
					width: "100%",
					maxWidth: "1200px",
					borderRadius: "1rem",
					border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"}`,
					backdropFilter: "blur(20px) saturate(200%)",
					WebkitBackdropFilter: "blur(20px) saturate(200%)",
					background: isDarkMode
						? `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%), ${bgColor}`
						: `linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)`,
					boxShadow: scrolled
						? "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
						: "0 4px 24px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
					transition: "all 0.5s ease",
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						px: { xs: 2, sm: 3 },
						py: 1,
					}}
				>
					{/* Left: Favicon + Brand */}
					<Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
						<Box
							sx={{
								width: 32,
								height: 32,
								borderRadius: "0.5rem",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								overflow: "hidden",
								transition: "transform 0.3s",
								backgroundColor: isDarkMode
									? "rgba(255, 255, 255, 0.05)"
									: "rgba(0, 0, 0, 0.05)",
								border: `1px solid ${borderColor}`,
								"&:hover": { transform: "scale(1.1)" },
							}}
						>
							<img
								src={FAVICON_URL}
								alt="Favicon"
								style={{ width: 20, height: 20, objectFit: "contain" }}
							/>
						</Box>
						<Typography
							sx={{
								color: isDarkMode ? "#fff" : "#000",
								fontWeight: 600,
								fontSize: "1rem",
								letterSpacing: "-0.01em",
								textShadow: isDarkMode ? "0 0 20px rgba(255,255,255,0.1)" : "none",
								display: { xs: "none", sm: "block" },
							}}
						>
							RizkyDarm
						</Typography>
					</Box>

					{/* Center: Navigation Links + Theme Toggle */}
					<Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
						{navItems.map((item) => (
							<Box
								key={item}
								component="a"
								href={`#${item.toLowerCase()}`}
								sx={{
									position: "relative",
									px: 2,
									py: 1,
									borderRadius: "0.75rem",
									fontSize: "0.875rem",
									fontWeight: 500,
									color: textColor,
									textDecoration: "none",
									transition: "all 0.3s",
									"&:hover": {
										color: textHoverColor,
										backgroundColor: navHoverBg,
									},
								}}
							>
								{item}
							</Box>
						))}

						{/* Theme Toggle */}
						<IconButton
							onClick={toggleTheme}
							sx={{
								color: isDarkMode ? "#fff" : "#000",
								ml: 1,
							}}
						>
							{isDarkMode ? <Brightness7 /> : <Brightness4 />}
						</IconButton>
					</Box>

					{/* Right: Avatar Circle */}
					<Box sx={{ position: "relative", cursor: "pointer" }}>
						<Box
							component="img"
							src={AVATAR_URL}
							alt="Avatar"
							sx={{
								width: 36,
								height: 36,
								borderRadius: "50%",
								objectFit: "cover",
								border: `2px solid ${avatarBorder}`,
								boxShadow: isDarkMode
									? "0 0 12px rgba(255, 255, 255, 0.05)"
									: "0 0 12px rgba(0, 0, 0, 0.1)",
								transition: "transform 0.3s",
								"&:hover": { transform: "scale(1.1)" },
							}}
						/>
						<Box
							sx={{
								position: "absolute",
								bottom: -2,
								right: -2,
								width: 12,
								height: 12,
								borderRadius: "50%",
								border: "2px solid",
								borderColor: isDarkMode ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)",
								backgroundColor: "#34d399",
								boxShadow: "0 0 8px rgba(52, 211, 153, 0.6)",
							}}
						/>
					</Box>
				</Box>
			</Box>
		</nav>
	);
};

export default GlassNavbar;
