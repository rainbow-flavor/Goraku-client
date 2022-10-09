import { Container } from "@mui/system";
import { ReactNode } from "react";
import Header from "./header";

interface Props {
	children: ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div>
			<Header />
			<Container maxWidth='xl'>{children}</Container>
		</div>
	);
};

export default Layout;
