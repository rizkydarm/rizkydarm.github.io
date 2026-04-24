import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import type React from "react";
import { useEffect, useState } from "react";

interface GlassNavbarProps {
	isDarkMode: boolean;
	toggleTheme: () => void;
}

const FAVICON_URL = "/favicon.png";
const AVATAR_URL = "/avatar.jpg";

const GlassNavbar: React.FC<GlassNavbarProps> = ({
	isDarkMode,
	toggleTheme,
}) => {
	const [scrolled, setScrolled] = useState(false);
	const theme = useTheme();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = ["Home", "Projects", "Skills", "Contact"];

	const handleNavClick = (item: string) => {
		const targetId = item.toLowerCase();
		const element = document.getElementById(targetId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const bgColor = scrolled
		? alpha(theme.palette.background.paper, 0.6)
		: alpha(theme.palette.background.default, 0.35);

	const textColor = alpha(theme.palette.text.primary, 0.6);
	const textHoverColor = theme.palette.text.primary;
	const navHoverBg = alpha(theme.palette.text.primary, 0.08);
	const borderColor = theme.palette.divider;
	const avatarBorder = alpha(theme.palette.text.primary, 0.15);

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
					border: `1px solid ${borderColor}`,
					backdropFilter: "blur(20px) saturate(200%)",
					WebkitBackdropFilter: "blur(20px) saturate(200%)",
					backgroundColor: bgColor,
					boxShadow: scrolled
						? `0 8px 32px ${alpha(theme.palette.common.black, 0.3)}, inset 0 1px 0 ${alpha(theme.palette.common.white, 0.1)}`
						: `0 4px 24px ${alpha(theme.palette.common.black, 0.2)}, inset 0 1px 0 ${alpha(theme.palette.common.white, 0.15)}`,
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
								backgroundColor: alpha(theme.palette.text.primary, 0.05),
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
								color: "text.primary",
								fontWeight: 600,
								fontSize: "1rem",
								letterSpacing: "-0.01em",
								textShadow: isDarkMode
									? `0 0 20px ${alpha(theme.palette.text.primary, 0.1)}`
									: "none",
								display: { xs: "none", sm: "block" },
							}}
						>
							RizkyDarm
						</Typography>
					</Box>

					{/* Center: Navigation Links + Theme Toggle */}
					<Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
						{navItems.map((item) => (
							<Button
								key={item}
								onClick={() => handleNavClick(item)}
								sx={{
									px: 2,
									py: 0.5,
									borderRadius: "0.75rem",
									fontSize: "0.875rem",
									fontWeight: 500,
									color: textColor,
									textTransform: "none",
									minWidth: "auto",
									transition: "all 0.3s",
									cursor: "pointer",
									"&:hover": {
										color: textHoverColor,
										backgroundColor: navHoverBg,
										transform: "scale(1.1)",
									},
								}}
							>
								{item}
							</Button>
						))}

						{/* Theme Toggle */}
						<IconButton
							onClick={toggleTheme}
							sx={{
								color: "text.primary",
								ml: 1,
								transition: "all 0.3s",
								"&:hover": {
									color: textHoverColor,
									backgroundColor: navHoverBg,
									transform: "scale(1.1)",
								},
							}}
						>
							{isDarkMode ? <Brightness7 /> : <Brightness4 />}
						</IconButton>
					</Box>

					{/* Right: Avatar Circle */}
					<Box
						component="img"
						src={AVATAR_URL}
						alt="Avatar"
						sx={{
							width: 36,
							height: 36,
							borderRadius: "50%",
							objectFit: "cover",
							position: "relative",
							cursor: "pointer",
							border: `2px solid ${avatarBorder}`,
							boxShadow: `0 0 12px ${alpha(theme.palette.text.primary, 0.05)}`,
							transition: "transform 0.3s",
							"&:hover": { transform: "scale(1.1)" },
						}}
					/>
				</Box>
			</Box>
		</nav>
	);
};

export default GlassNavbar;
