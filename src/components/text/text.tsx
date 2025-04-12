import clsx from "clsx";
import { type ForwardedRef, type ReactNode, forwardRef } from "react";
import { Color } from "~/constants";
import type { ValueOf } from "~/types";

type TextProps = {
	color?: ValueOf<typeof Color>;
	children?: ReactNode;
};

const Text = forwardRef(
	(
		{ color = "neutral", children, ...props }: TextProps,
		ref: ForwardedRef<HTMLParagraphElement>,
	) => {
		return (
			<p
				{...props}
				ref={ref}
				className={clsx(
					"text-sm",
					color === Color.NEUTRAL && "text-slate-600",
					color === Color.PRIMARY && "text-primary-500",
					color === Color.INFO && "text-blue-500",
					color === Color.WARNING && "text-yellow-500",
					color === Color.ERROR && "text-red-500",
					color === Color.SUCCESS && "text-green-500",
				)}
			>
				{children}
			</p>
		);
	},
);

export { Text };
export type { TextProps };
