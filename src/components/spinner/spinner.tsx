import { Theme } from "~/constants";
import type { ValueOf } from "~/types";
import { cn } from "~/utils";

type SpinnerProps = {
	theme?: ValueOf<typeof Theme>;
};

const Spinner = ({ theme = "light" }: SpinnerProps) => {
	return (
		<div
			className={cn(
				"h-5 w-5 animate-spin rounded-full border-4",
				theme === Theme.LIGHT && "border-slate-700/20 border-t-slate-700",
				theme === Theme.DARK && "border-white/20 border-t-white",
			)}
		/>
	);
};

export { Spinner };
export type { SpinnerProps };

