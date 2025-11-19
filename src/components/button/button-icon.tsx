import {
	type ForwardedRef,
	type MouseEventHandler,
	type ReactNode,
	forwardRef,
} from "react";
import { cn } from "~/utils";

type ButtonIconProps = {
	size?: 1 | 2 | 3;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children?: ReactNode;
};

const ButtonIcon = forwardRef(
	(
		{ size = 2, onClick, children, ...props }: ButtonIconProps,
		ref: ForwardedRef<HTMLButtonElement>,
	) => {
		return (
			<button
				{...props}
				ref={ref}
				onClick={onClick}
				className={cn(
					"flex items-center justify-center rounded-lg border-transparent bg-transparent hover:border-slate-100 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
					size === 1 && "p-1",
					size === 2 && "p-2",
					size === 3 && "p-4",
				)}
			>
				{children}
			</button>
		);
	},
);

export { ButtonIcon };
export type { ButtonIconProps };

