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
import NavLink from "@/common/nav-link";
import Link from "next/link";
import { Twitter } from "@mui/icons-material";

const Footer = () => {
	return (
		<Box
			component='footer'
			sx={{
				backgroundColor: (theme) =>
					theme.palette.mode === "light"
						? theme.palette.grey[200]
						: theme.palette.grey[800],
				py: 2,
			}}
		>
			<Container
				maxWidth='lg'
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
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
						component='h4'
						variant='h6'
						color='inherit'
						align='center'
					>
						GORAKULIST
					</Typography>
				</Box>

				<Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
					<NavLink href='https://twitter.com/GorakuList' target='_blank'>
						<Icon>
							<Image src={LogoIcon} alt='Goraku 공식 트위터' />
						</Icon>
					</NavLink>

					<Typography
						fontWeight='bold'
						sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
						variant='subtitle1'
						align='center'
						color='text.secondary'
						component='p'
					>
						<NavLink href='/legal/toc'>
							<Typography variant='body2' color='#007bff' align='center'>
								이용 약관
							</Typography>
						</NavLink>
						|
						<NavLink href='/legal/privacy'>
							<Typography variant='body2' color='#007bff' align='center'>
								개인정보취급방침
							</Typography>
						</NavLink>
					</Typography>

					<Typography
						variant='body2'
						color='text.secondary'
						align='center'
						fontWeight='bold'
					>
						Copyright © 2021 - 2022
					</Typography>

					<NavLink href='/'>
						<Typography variant='body2' color='#007bff' align='center'>
							GorakuList
						</Typography>
					</NavLink>

					<Typography
						variant='body2'
						color='text.secondary'
						align='center'
						fontWeight='bold'
					>
						| All rights reserved
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;