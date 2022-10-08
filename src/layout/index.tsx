import { ReactNode } from "react";
import Header from "./header";

interface Props {
	children: ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default Layout;
