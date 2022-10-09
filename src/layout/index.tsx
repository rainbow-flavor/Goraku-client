import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

interface Props {
	children: ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<Box
			sx={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<Header />
			<Container maxWidth='xl' sx={{ flexGrow: 1 }} component='main'>
				{children}
			</Container>
			<Footer />
		</Box>
	);
};

export default Layout;
