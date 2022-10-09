import {
	AppBar,
	Box,
	Button,
	Icon,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material";
import LogoIcon from "@/assets/icon/logo.svg";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { StyledLink } from "@/common/nav-link/style";
import NavLink from "@/common/nav-link";

const pages = [
	{ url: "/", text: "홈" },
	{ url: "/search", text: "검색" },
	{ url: "/cs", text: "문의" },
];

const Header = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static' color='transparent'>
				<Container maxWidth='xl'>
					<Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								gap: 0.5,
								alignItems: "center",
							}}
						>
							<Icon>
								<Image src={LogoIcon} alt='오락실 아이콘' />
							</Icon>
							<Typography
								component='h2'
								variant='h5'
								color='inherit'
								align='center'
							>
								GORAKULIST
							</Typography>
						</Box>

						<Box sx={{ display: { xs: "flex", md: "none" } }}>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenNavMenu}
								color='inherit'
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								{pages.map((page) => (
									<MenuItem key={page.text} onClick={handleCloseNavMenu}>
										<NavLink href={page.url}>{page.text}</NavLink>
									</MenuItem>
								))}
							</Menu>
						</Box>

						<Box sx={{ display: { xs: "none", md: "flex" } }}>
							{pages.map((page) => (
								<Button
									key={page.text}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, display: "block" }}
								>
									<NavLink href={page.url}>{page.text}</NavLink>
								</Button>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};

export default Header;