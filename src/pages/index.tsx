import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
	Box,
	Button,
	Container,
	Typography,
	Grid,
	Card,
	CardContent,
	TextField,
	IconButton,
	Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
	LinkedIn,
	GitHub,
	Twitter,
	Instagram,
	Email,
	Phone,
	LocationOn,
} from "@mui/icons-material";

// Styled components following DESIGN.md
const GlobalStyles = styled("div")({
	"*": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
	},
	html: {
		scrollBehavior: "smooth",
	},
	body: {
		fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
		color: "#333",
		lineHeight: "1.6",
	},
	a: {
		textDecoration: "none",
		color: "inherit",
	},
	ul: {
		listStyle: "none",
	},
});

const MainContainer = styled(Container)({
	maxWidth: "1100px",
	margin: "0 auto",
	padding: "0 20px",
});

const Section = styled("section")(({ theme }) => ({
	padding: "100px 0",
	backgroundColor: theme.backgroundColor || "transparent",
}));

const SectionTitle = styled("div")({
	textAlign: "center",
	marginBottom: "60px",
	"& h2": {
		fontSize: "2.5rem",
		color: "#333",
		marginBottom: "10px",
		position: "relative",
		"&::after": {
			content: '""',
			display: "block",
			width: "60px",
			height: "4px",
			background: "#6c63ff",
			margin: "10px auto 0",
			borderRadius: "2px",
		},
	},
	"& p": {
		color: "#777",
		fontSize: "1.1rem",
	},
});

const Navbar = styled("nav")({
	position: "fixed",
	top: 0,
	width: "100%",
	background: "rgba(255, 255, 255, 0.95)",
	backdropFilter: "blur(10px)",
	boxShadow: "0 2px 15px rgba(0,0,0,0.1)",
	zIndex: 1000,
	transition: "all 0.3s ease",
});

const NavContainer = styled(MainContainer)({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	height: "70px",
});

const Logo = styled(Typography)({
	fontSize: "1.8rem",
	fontWeight: 700,
	color: "#6c63ff",
	"& span": {
		color: "#333",
	},
});

const NavLinks = styled("ul")({
	display: "flex",
	gap: "30px",
	"@media (max-width: 768px)": {
		display: "none",
	},
});

const NavLink = styled("a")({
	fontWeight: 500,
	position: "relative",
	padding: "5px 0",
	transition: "color 0.3s",
	"&::after": {
		content: '""',
		position: "absolute",
		bottom: 0,
		left: 0,
		width: 0,
		height: "2px",
		background: "#6c63ff",
		transition: "width 0.3s",
	},
	"&:hover": {
		color: "#6c63ff",
		"&::after": {
			width: "100%",
		},
	},
});

const HamburgerButton = styled(IconButton)({
	display: "none",
	flexDirection: "column",
	gap: "5px",
	cursor: "pointer",
	background: "none",
	border: "none",
	"& span": {
		width: "28px",
		height: "3px",
		background: "#333",
		borderRadius: "3px",
		transition: "all 0.3s",
	},
	"@media (max-width: 768px)": {
		display: "flex",
	},
});

const HeroSection = styled("section")({
	minHeight: "100vh",
	display: "flex",
	alignItems: "center",
	background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
	color: "#fff",
	position: "relative",
	overflow: "hidden",
	"&::before": {
		content: '""',
		position: "absolute",
		width: "400px",
		height: "400px",
		background: "rgba(255,255,255,0.05)",
		borderRadius: "50%",
		top: "-100px",
		right: "-100px",
	},
	"&::after": {
		content: '""',
		position: "absolute",
		width: "300px",
		height: "300px",
		background: "rgba(255,255,255,0.05)",
		borderRadius: "50%",
		bottom: "-80px",
		left: "-80px",
	},
});

const HeroContent = styled("div")({
	position: "relative",
	zIndex: 1,
});

const HeroTitle = styled(Typography)(({ theme }) => ({
	fontSize: "3.5rem",
	marginBottom: "10px",
	animation: "fadeInUp 1s ease",
	"& span": {
		color: "#ffd700",
	},
	"@media (max-width: 768px)": {
		fontSize: "2.2rem",
	},
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
	fontSize: "1.5rem",
	fontWeight: 400,
	marginBottom: "20px",
	opacity: 0.9,
	animation: "fadeInUp 1s ease 0.2s both",
	"@media (max-width: 768px)": {
		fontSize: "1.2rem",
	},
}));

const HeroParagraph = styled(Typography)(({ theme }) => ({
	fontSize: "1.1rem",
	maxWidth: "500px",
	opacity: 0.85,
	marginBottom: "30px",
	animation: "fadeInUp 1s ease 0.4s both",
}));

const HeroButtons = styled("div")({
	display: "flex",
	gap: "15px",
	animation: "fadeInUp 1s ease 0.6s both",
	"@media (max-width: 768px)": {
		flexDirection: "column",
		alignItems: "flex-start",
	},
});

const PrimaryButton = styled(Button)(({ theme }) => ({
	padding: "12px 30px",
	borderRadius: "50px",
	fontSize: "1rem",
	fontWeight: 600,
	cursor: "pointer",
	transition: "all 0.3s",
	border: "2px solid transparent",
	backgroundColor: "#fff",
	color: "#6c63ff",
	"&:hover": {
		transform: "translateY(-3px)",
		boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
	},
}));

const OutlineButton = styled(Button)(({ theme }) => ({
	padding: "12px 30px",
	borderRadius: "50px",
	fontSize: "1rem",
	fontWeight: 600,
	cursor: "pointer",
	transition: "all 0.3s",
	border: "2px solid #fff",
	color: "#fff",
	background: "transparent",
	"&:hover": {
		background: "#fff",
		color: "#6c63ff",
		transform: "translateY(-3px)",
	},
}));

const SkillCard = styled(Card)(({ theme }) => ({
	background: "#fff",
	padding: "30px",
	borderRadius: "15px",
	textAlign: "center",
	boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
	transition: "all 0.3s",
	border: "1px solid #eee",
	"&:hover": {
		transform: "translateY(-10px)",
		boxShadow: "0 15px 40px rgba(108, 99, 255, 0.15)",
		borderColor: "#6c63ff",
	},
}));

const SkillBar = styled("div")({
	width: "100%",
	height: "8px",
	background: "#eee",
	borderRadius: "10px",
	overflow: "hidden",
	marginTop: "10px",
});

const SkillBarFill = styled("div")(({ width }) => ({
	height: "100%",
	background: "linear-gradient(90deg, #667eea, #764ba2)",
	borderRadius: "10px",
	width: width || "0%",
	transition: "width 1.5s ease",
}));

const ProjectCard = styled(Card)(({ theme }) => ({
	background: "#fff",
	borderRadius: "15px",
	overflow: "hidden",
	boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
	transition: "all 0.3s",
	"&:hover": {
		transform: "translateY(-10px)",
		boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
	},
}));

const ProjectImage = styled("div")(({ gradient }) => ({
	height: "200px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "4rem",
	color: "#fff",
	background: gradient || "linear-gradient(135deg, #667eea, #764ba2)",
}));

const ContactItem = styled("div")({
	display: "flex",
	alignItems: "center",
	gap: "15px",
	marginBottom: "20px",
});

const ContactIcon = styled("div")(({ theme }) => ({
	width: "50px",
	height: "50px",
	background: "linear-gradient(135deg, #667eea, #764ba2)",
	borderRadius: "12px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "1.3rem",
	color: "#fff",
	flexShrink: 0,
}));

const Footer = styled("footer")({
	background: "#1a1a2e",
	color: "#fff",
	textAlign: "center",
	padding: "40px 0",
});

const SocialLinks = styled("div")({
	display: "flex",
	justifyContent: "center",
	gap: "20px",
	marginBottom: "20px",
});

const ScrollTopButton = styled(IconButton)(({ visible }) => ({
	position: "fixed",
	bottom: "30px",
	right: "30px",
	width: "50px",
	height: "50px",
	background: "linear-gradient(135deg, #667eea, #764ba2)",
	color: "#fff",
	border: "none",
	borderRadius: "50%",
	fontSize: "1.3rem",
	cursor: "pointer",
	opacity: visible ? 1 : 0,
	visibility: visible ? "visible" : "hidden",
	transition: "all 0.3s",
	boxShadow: "0 5px 20px rgba(108, 99, 255, 0.4)",
	"&:hover": {
		transform: "translateY(-5px)",
	},
}));

// Keyframe animations - injected on client only
const injectGlobalStyles = () => {
	if (typeof document === "undefined") return;
	const styleSheet = document.createElement("style");
	styleSheet.innerText = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: all 0.8s ease;
    }
    .reveal.active {
      opacity: 1;
      transform: translateY(0);
    }
  `;
	document.head.appendChild(styleSheet);
};

// Portfolio data from portfolio.md
const portfolioData = {
	name: "Rizky Darmawan",
	location: "Jakarta, Indonesia",
	email: "rizkydarm.000@gmail.com",
	phone: "+62 813 8722 9330",
	linkedin: "linkedin.com/in/rizkydarm",
	github: "github.com/rizkydarm",
	website: "rizky-port.web.app",
	summary:
		"Software Engineer with 5+ years of experience designing and shipping cross-platform mobile applications (Flutter, Swift, Kotlin) for enterprise clients in banking, telecom, and fintech. Currently architecting AI-driven automation systems using n8n, FastAPI, and LLM agents, with a strong foundation in cloud deployment, CI/CD, and Agile delivery. Proven track record of collaborating with cross-functional teams to deliver secure, scalable products used by thousands of active users.",
	skills: [
		{ name: "Dart", icon: "🎯", level: "95%" },
		{ name: "Kotlin", icon: "🟡", level: "90%" },
		{ name: "Swift", icon: "🍎", level: "85%" },
		{ name: "Python", icon: "🐍", level: "80%" },
		{ name: "TypeScript", icon: "⚡", level: "75%" },
		{ name: "Flutter", icon: "📱", level: "90%" },
		{ name: "React", icon: "⚛️", level: "70%" },
		{ name: "FastAPI", icon: "🚀", level: "85%" },
		{ name: "Docker", icon: "🐳", level: "75%" },
		{ name: "PostgreSQL", icon: "🗄️", level: "70%" },
		{ name: "LLM Agents", icon: "🤖", level: "65%" },
		{ name: "UI/UX Design", icon: "🎨", level: "60%" },
	],
	projects: [
		{
			title: "AI-Powered Retail Automation Agent",
			description:
				"Built an autonomous workflow that syncs inventory, processes customer inquiries, and generates daily sales reports. Reduced manual admin work by ~15 hrs/week for pilot UMKM clients; deployed on Linux VPS with health monitoring & auto-restart scripts.",
			tags: ["FastAPI", "n8n", "Gemini", "Docker", "Telegram"],
			link: "github.com/rizkydarm/retail-ai-agent",
			gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
			icon: "🛒",
		},
		{
			title: "Cross-Platform Finance Tracker",
			description:
				"Designed a personal finance dashboard with real-time sync, OCR receipt scanning, and AI-powered spending categorization. Implemented offline-first architecture, CI/CD via GitHub Actions, and unit/widget tests covering 85% of core logic.",
			tags: ["Flutter", "Firebase", "Supabase", "Clean Architecture"],
			link: "rizky-port.web.app/projects/finance-tracker",
			gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
			icon: "💰",
		},
		{
			title: "Mobile Banking App",
			description:
				"Maintained and scaled a banking merchant app integrated with Mandiri Bank's core systems, serving 100K+ monthly active users. Achieved 99.5% crash-free sessions by implementing Sentry monitoring and optimizing memory usage.",
			tags: ["Kotlin", "Swift", "Xamarin MAUI", "Banking API"],
			link: "#",
			gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
			icon: "🏦",
		},
	],
	experience: [
		{
			title: "AI Automation & Backend Developer",
			company: "ISeller IT Consultant",
			location: "Remote",
			period: "Aug 2024 – Present",
			points: [
				"Architected and deployed a secure, Docker-containerized backend (FastAPI + n8n) on Linux VPS, automating cross-platform workflows (Telegram, Notion, Google Sheets) powered by Gemini LLM agents.",
				"Reduced manual data processing and inventory management time by ~40% for 50+ UMKM retail/F&B clients through automated sync pipelines and AI-driven reporting.",
				"Implemented monitoring, logging, and rollback strategies, achieving 99.5% uptime and streamlining client onboarding from 3 days to <1 day.",
			],
		},
		{
			title: "Mobile Engineer (Android & iOS)",
			company: "ISeller",
			location: "Jakarta, Indonesia",
			period: "Jun 2024 – Dec 2024",
			points: [
				"Maintained and scaled a banking merchant app (Xamarin MAUI/Kotlin/Swift) integrated with Mandiri Bank's core systems, serving 100K+ monthly active users.",
				"Achieved 99.5% crash-free sessions by implementing Sentry monitoring, optimizing memory usage, and enforcing rigorous QA cycles.",
				"Delivered 15+ sprint features in Agile/Scrum environment, reducing bug resolution time by 30% through improved test coverage and CI/CD pipeline optimization (Azure DevOps, Bitrise).",
			],
		},
	],
	education: {
		degree: "B.Sc. in Computer Science",
		school: "Universitas Pendidikan Indonesia",
		period: "Aug 2018 – Sep 2023",
		gpa: "3.43/4.00",
		thesis:
			"AI Computer Vision for Mobile Autonomous Soccer Robot (PyTorch, OpenCV, Vision Transformers)",
	},
};

const IndexPage: React.FC<PageProps> = () => {
	const [menuOpen, setMenuOpen] = React.useState(false);
	const [scrollVisible, setScrollVisible] = React.useState(false);

	React.useEffect(() => {
		injectGlobalStyles();

		const handleScroll = () => {
			// Show scroll to top button
			if (window.scrollY > 500) {
				setScrollVisible(true);
			} else {
				setScrollVisible(false);
			}

			// Scroll reveal animations
			const reveals = document.querySelectorAll(".reveal");
			reveals.forEach((el) => {
				const windowHeight = window.innerHeight;
				const revealTop = el.getBoundingClientRect().top;
				if (revealTop < windowHeight - 100) {
					el.classList.add("active");
				}
			});

			// Active nav link highlighting
			const sections = document.querySelectorAll("section");
			const navItems = document.querySelectorAll(".nav-links a");
			let current = "";
			sections.forEach((section) => {
				const sectionTop = section.offsetTop - 100;
				if (window.scrollY >= sectionTop) {
					current = section.getAttribute("id") || "";
				}
			});

			navItems.forEach((link) => {
				const href = link.getAttribute("href");
				if (href === `#${current}`) {
					link.style.color = "#6c63ff";
				} else {
					link.style.color = "";
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("load", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("load", handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<GlobalStyles>
			{/* Navbar */}
			<Navbar>
				<img src="https://rizkydarm.github.io/avatar.jpg" alt="Avatar" />
				<NavContainer>
					<Logo variant="h6">
						Rizky<span>Darmawan</span>
					</Logo>
					<NavLinks className="nav-links">
						<li>
							<NavLink href="#hero" onClick={closeMenu}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink href="#about" onClick={closeMenu}>
								About
							</NavLink>
						</li>
						<li>
							<NavLink href="#skills" onClick={closeMenu}>
								Skills
							</NavLink>
						</li>
						<li>
							<NavLink href="#projects" onClick={closeMenu}>
								Projects
							</NavLink>
						</li>
						<li>
							<NavLink href="#contact" onClick={closeMenu}>
								Contact
							</NavLink>
						</li>
					</NavLinks>
					<HamburgerButton onClick={toggleMenu}>
						<span />
						<span />
						<span />
					</HamburgerButton>
				</NavContainer>
			</Navbar>

			{/* Hero Section */}
			<HeroSection id="hero">
				<MainContainer>
					<HeroContent>
						<HeroTitle variant="h1">
							Hi, I'm <span>{portfolioData.name.split(" ")[1]}</span>
						</HeroTitle>
						<HeroSubtitle variant="h2">
							Software Engineer & AI Automation Specialist
						</HeroSubtitle>
						<HeroParagraph variant="body1">
							{portfolioData.summary}
						</HeroParagraph>
						<HeroButtons>
							<PrimaryButton variant="contained" href="#projects">
								View My Work
							</PrimaryButton>
							<OutlineButton variant="outlined" href="#contact">
								Contact Me
							</OutlineButton>
						</HeroButtons>
					</HeroContent>
				</MainContainer>
			</HeroSection>

			{/* About Section */}
			<Section id="about" backgroundColor="#f9f9f9">
				<MainContainer>
					<SectionTitle className="reveal">
						<h2>About Me</h2>
						<p>Get to know me better</p>
					</SectionTitle>
					<Grid container spacing={6} alignItems="center">
						<Grid item xs={12} md={5} className="reveal">
							<Box textAlign="center">
								<Box
									sx={{
										width: "280px",
										height: "280px",
										borderRadius: "50%",
										background: "linear-gradient(135deg, #667eea, #764ba2)",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "6rem",
										color: "#fff",
										margin: "0 auto",
										boxShadow: "0 20px 60px rgba(108, 99, 255, 0.3)",
									}}
								>
									👨‍💻
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={7} className="reveal">
							<Typography variant="h4" sx={{ mb: 2, color: "#6c63ff" }}>
								A passionate developer based in Jakarta
							</Typography>
							<Typography
								variant="body1"
								sx={{ mb: 2, color: "#666", lineHeight: 1.8 }}
							>
								I'm a software engineer with 5+ years of experience creating
								cross-platform mobile applications and AI automation systems for
								enterprise clients. I love turning complex problems into simple,
								beautiful, and intuitive solutions.
							</Typography>
							<Typography
								variant="body1"
								sx={{ mb: 2, color: "#666", lineHeight: 1.8 }}
							>
								When I'm not coding, you'll find me reading books, hiking, or
								experimenting with new recipes in the kitchen.
							</Typography>
							<Grid container spacing={2} sx={{ mt: 3 }}>
								<Grid item xs={12} sm={6}>
									<Typography variant="body2">
										<strong>Name: </strong>
										<span>{portfolioData.name}</span>
									</Typography>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Typography variant="body2">
										<strong>Email: </strong>
										<span>{portfolioData.email}</span>
									</Typography>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Typography variant="body2">
										<strong>Age: </strong>
										<span>{new Date().getFullYear() - 2000} years</span>
									</Typography>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Typography variant="body2">
										<strong>Location: </strong>
										<span>{portfolioData.location}</span>
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</MainContainer>
			</Section>

			{/* Skills Section */}
			<Section id="skills">
				<MainContainer>
					<SectionTitle className="reveal">
						<h2>My Skills</h2>
						<p>Technologies I work with</p>
					</SectionTitle>
					<Grid container spacing={3}>
						{portfolioData.skills.map((skill, index) => (
							<Grid
								item
								xs={12}
								sm={6}
								md={4}
								key={skill.name}
								className="reveal"
							>
								<SkillCard>
									<Typography variant="h3" sx={{ fontSize: "3rem", mb: 2 }}>
										{skill.icon}
									</Typography>
									<Typography
										variant="h6"
										sx={{ mb: 1, fontSize: "1.3rem", fontWeight: 600 }}
									>
										{skill.name}
									</Typography>
									<Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
										{skill.description || "Professional proficiency"}
									</Typography>
									<SkillBar>
										<SkillBarFill width={skill.level} />
									</SkillBar>
								</SkillCard>
							</Grid>
						))}
					</Grid>
				</MainContainer>
			</Section>

			{/* Projects Section */}
			<Section id="projects" backgroundColor="#f9f9f9">
				<MainContainer>
					<SectionTitle className="reveal">
						<h2>My Projects</h2>
						<p>Some things I've built</p>
					</SectionTitle>
					<Grid container spacing={3}>
						{portfolioData.projects.map((project, index) => (
							<Grid
								item
								xs={12}
								sm={6}
								md={4}
								key={project.title}
								className="reveal"
							>
								<ProjectCard>
									<ProjectImage gradient={project.gradient}>
										{project.icon}
									</ProjectImage>
									<CardContent>
										<Typography
											variant="h6"
											sx={{ mb: 1, fontSize: "1.3rem", fontWeight: 600 }}
										>
											{project.title}
										</Typography>
										<Typography
											variant="body2"
											sx={{ color: "#666", mb: 2, fontSize: "0.95rem" }}
										>
											{project.description}
										</Typography>
										<Box
											sx={{
												display: "flex",
												gap: "8px",
												flexWrap: "wrap",
												mb: 2,
											}}
										>
											{project.tags.map((tag) => (
												<Box
													key={tag}
													sx={{
														background: "#f0eeff",
														color: "#6c63ff",
														padding: "4px 12px",
														borderRadius: "20px",
														fontSize: "0.8rem",
														fontWeight: 600,
													}}
												>
													{tag}
												</Box>
											))}
										</Box>
										<Box sx={{ display: "flex", gap: "10px" }}>
											<Button
												variant="contained"
												sx={{
													padding: "8px 20px",
													borderRadius: "25px",
													fontSize: "0.85rem",
													fontWeight: 600,
													background: "#6c63ff",
													"&:hover": {
														background: "#5a52d5",
													},
												}}
												href={project.link}
											>
												Live Demo
											</Button>
											<Button
												variant="outlined"
												sx={{
													padding: "8px 20px",
													borderRadius: "25px",
													fontSize: "0.85rem",
													fontWeight: 600,
													borderColor: "#6c63ff",
													color: "#6c63ff",
													"&:hover": {
														background: "#6c63ff",
														color: "#fff",
													},
												}}
												href={project.link}
											>
												Source Code
											</Button>
										</Box>
									</CardContent>
								</ProjectCard>
							</Grid>
						))}
					</Grid>
				</MainContainer>
			</Section>

			{/* Contact Section */}
			<Section id="contact">
				<MainContainer>
					<SectionTitle className="reveal">
						<h2>Get In Touch</h2>
						<p>Let's work together</p>
					</SectionTitle>
					<Grid container spacing={6}>
						<Grid item xs={12} md={5} className="reveal">
							<Typography variant="h5" sx={{ mb: 2, fontSize: "1.8rem" }}>
								Let's talk about your project
							</Typography>
							<Typography
								variant="body1"
								sx={{ mb: 3, color: "#666", lineHeight: 1.8 }}
							>
								I'm always open to discussing new projects, creative ideas, or
								opportunities to be part of your vision. Feel free to reach out!
							</Typography>
							<ContactItem>
								<ContactIcon>
									<Email />
								</ContactIcon>
								<Box>
									<Typography
										variant="subtitle2"
										sx={{ fontSize: "1rem", fontWeight: 600 }}
									>
										Email
									</Typography>
									<Typography
										variant="body2"
										sx={{ color: "#666", fontSize: "0.9rem" }}
									>
										{portfolioData.email}
									</Typography>
								</Box>
							</ContactItem>
							<ContactItem>
								<ContactIcon>
									<Phone />
								</ContactIcon>
								<Box>
									<Typography
										variant="subtitle2"
										sx={{ fontSize: "1rem", fontWeight: 600 }}
									>
										Phone
									</Typography>
									<Typography
										variant="body2"
										sx={{ color: "#666", fontSize: "0.9rem" }}
									>
										{portfolioData.phone}
									</Typography>
								</Box>
							</ContactItem>
							<ContactItem>
								<ContactIcon>
									<LocationOn />
								</ContactIcon>
								<Box>
									<Typography
										variant="subtitle2"
										sx={{ fontSize: "1rem", fontWeight: 600 }}
									>
										Location
									</Typography>
									<Typography
										variant="body2"
										sx={{ color: "#666", fontSize: "0.9rem" }}
									>
										{portfolioData.location}
									</Typography>
								</Box>
							</ContactItem>
							<SocialLinks>
								<Tooltip title="LinkedIn">
									<IconButton
										href={`https://${portfolioData.linkedin}`}
										sx={{
											color: "#fff",
											background: "linear-gradient(135deg, #667eea, #764ba2)",
											"&:hover": { background: "#6c63ff" },
										}}
									>
										<LinkedIn />
									</IconButton>
								</Tooltip>
								<Tooltip title="GitHub">
									<IconButton
										href={`https://${portfolioData.github}`}
										sx={{
											color: "#fff",
											background: "linear-gradient(135deg, #667eea, #764ba2)",
											"&:hover": { background: "#6c63ff" },
										}}
									>
										<GitHub />
									</IconButton>
								</Tooltip>
								<Tooltip title="Twitter">
									<IconButton
										href="#"
										sx={{
											color: "#fff",
											background: "linear-gradient(135deg, #667eea, #764ba2)",
											"&:hover": { background: "#6c63ff" },
										}}
									>
										<Twitter />
									</IconButton>
								</Tooltip>
								<Tooltip title="Instagram">
									<IconButton
										href="#"
										sx={{
											color: "#fff",
											background: "linear-gradient(135deg, #667eea, #764ba2)",
											"&:hover": { background: "#6c63ff" },
										}}
									>
										<Instagram />
									</IconButton>
								</Tooltip>
							</SocialLinks>
						</Grid>
						<Grid item xs={12} md={7} className="reveal">
							<Box
								sx={{
									background: "#fff",
									padding: "40px",
									borderRadius: "15px",
									boxShadow: "0 5px 30px rgba(0,0,0,0.08)",
								}}
							>
								<form>
									<TextField
										label="Your Name"
										variant="outlined"
										fullWidth
										required
										sx={{ mb: 3 }}
									/>
									<TextField
										label="Your Email"
										variant="outlined"
										fullWidth
										required
										type="email"
										sx={{ mb: 3 }}
									/>
									<TextField
										label="Your Message"
										variant="outlined"
										fullWidth
										required
										multiline
										rows={4}
										sx={{ mb: 3 }}
									/>
									<Button
										variant="contained"
										fullWidth
										sx={{
											padding: "14px",
											background: "linear-gradient(135deg, #667eea, #764ba2)",
											color: "#fff",
											border: "none",
											borderRadius: "10px",
											fontSize: "1.1rem",
											fontWeight: 600,
											cursor: "pointer",
											transition: "all 0.3s",
											"&:hover": {
												transform: "translateY(-2px)",
												boxShadow: "0 10px 30px rgba(108, 99, 255, 0.4)",
											},
										}}
									>
										Send Message ✉️
									</Button>
								</form>
							</Box>
						</Grid>
					</Grid>
				</MainContainer>
			</Section>

			{/* Footer */}
			<Footer>
				<MainContainer>
					<SocialLinks>
						<a href={`https://${portfolioData.linkedin}`} title="LinkedIn">
							💼
						</a>
						<a href={`https://${portfolioData.github}`} title="GitHub">
							🐙
						</a>
						<a href="#" title="Twitter">
							🐦
						</a>
						<a href="#" title="Instagram">
							📷
						</a>
					</SocialLinks>
					<Typography variant="body2" sx={{ opacity: 0.7, fontSize: "0.9rem" }}>
						© {new Date().getFullYear()} {portfolioData.name}. All rights
						reserved.
					</Typography>
				</MainContainer>
			</Footer>

			{/* Scroll to Top Button */}
			<ScrollTopButton visible={scrollVisible} onClick={scrollToTop}>
				↑
			</ScrollTopButton>
		</GlobalStyles>
	);
};

export default IndexPage;

export const Head: HeadFC = () => (
	<title>{`${portfolioData.name} | Software Engineer`}</title>
);
