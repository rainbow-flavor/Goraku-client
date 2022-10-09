import Link from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import { StyledLink } from "./style";

interface Props {
	children: ReactNode;
	href: string;
	target?: HTMLAttributeAnchorTarget;
}

const NavLink = ({ children, href, target }: Props) => {
	return (
		<Link href={href}>
			<StyledLink href={href} target={target} rel='no  noreferrer'>
				{children}
			</StyledLink>
		</Link>
	);
};

export default NavLink;
