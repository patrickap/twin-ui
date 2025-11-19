import type { AnchorHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { cn } from "~/utils";

type NavItemProps = {
	target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
	href?: string;
	icon?: ReactNode;
	isActive?: boolean;
	onClick?: MouseEventHandler<HTMLAnchorElement>;
	children?: ReactNode;
};

const NavItem = ({
	target,
	href,
	icon,
	isActive,
	onClick,
	children,
}: NavItemProps) => {
	return (
		<a
			target={target}
			href={href}
			onClick={onClick}
			className={cn(
				"flex cursor-pointer items-center gap-2.5 rounded-lg p-2.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
				isActive && "bg-slate-100!",
				!children && "inline-flex! justify-center!",
			)}
		>
			{icon ? (
				<span className="h-5 w-5 text-slate-700 *:stroke-[1.75]">
					{icon}
				</span>
			) : null}
			{children ? (
				<span className="text-base font-medium text-slate-700 sm:text-sm">
					{children}
				</span>
			) : null}
		</a>
	);
};

export { NavItem };
export type { NavItemProps };

