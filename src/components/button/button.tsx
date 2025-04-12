import clsx from "clsx";
import {
	type ButtonHTMLAttributes,
	type ForwardedRef,
	type MouseEventHandler,
	type ReactNode,
	forwardRef,
} from "react";
import { Spinner } from "~/components/spinner";
import { Color } from "~/constants";
import type { ValueOf } from "~/types";

type ButtonProps = {
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
	color?: ValueOf<typeof Color>;
	isDisabled?: boolean;
	isLoading?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children?: ReactNode;
};

const Button = forwardRef(
	(
		{
			type = "button",
			color = "neutral",
			isDisabled = false,
			isLoading = false,
			onClick,
			children,
			...props
		}: ButtonProps,
		ref: ForwardedRef<HTMLButtonElement>,
	) => {
		return (
			<button
				{...props}
				ref={ref}
				type={type}
				disabled={isDisabled || isLoading}
				onClick={onClick}
				className={clsx(
					"inline-flex w-full items-center justify-center rounded-lg border px-4 py-2 text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm",
					color === Color.NEUTRAL &&
						"border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus:ring-primary-500",
					color === Color.PRIMARY &&
						"border-transparent bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500",
					color === Color.INFO &&
						"border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
					color === Color.WARNING &&
						"border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500",
					color === Color.ERROR &&
						"border-transparent bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
					color === Color.SUCCESS &&
						"border-transparent bg-green-500 text-white hover:bg-green-600 focus:ring-green-500",
					isDisabled &&
						"!cursor-not-allowed !border-slate-200 !bg-slate-100 !text-slate-300",
					isLoading && !isDisabled && "!cursor-not-allowed",
				)}
			>
				<span className={clsx(isLoading && !isDisabled && "opacity-0")}>
					{children}
				</span>
				{isLoading && !isDisabled ? (
					<span className="absolute">
						<Spinner theme={color === Color.NEUTRAL ? "light" : "dark"} />
					</span>
				) : null}
			</button>
		);
	},
);

export { Button };
export type { ButtonProps };
