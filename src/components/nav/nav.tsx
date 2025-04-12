import { Children, type ReactNode } from "react";

type NavProps = {
	children?: ReactNode;
};

const Nav = ({ children }: NavProps) => {
	return (
		<nav>
			<ul className="flex flex-col gap-1">
				{Children.toArray(children).map((child, i) => (
					<li key={i}>{child}</li>
				))}
			</ul>
		</nav>
	);
};

export { Nav };
export type { NavProps };
