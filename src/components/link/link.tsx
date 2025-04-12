import type { AnchorHTMLAttributes, MouseEventHandler, ReactNode } from "react";

type LinkProps = {
	target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
	href?: string;
	onClick?: MouseEventHandler<HTMLAnchorElement>;
	children?: ReactNode;
};

const Link = ({ target, href, onClick, children }: LinkProps) => {
	return (
		<a
			target={target}
			href={href}
			onClick={onClick}
			className="cursor-pointer text-sm font-medium text-primary-500 hover:text-primary-400 focus:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
		>
			{children}
		</a>
	);
};

export { Link };
export type { LinkProps };
