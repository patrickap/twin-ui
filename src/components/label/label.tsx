import type { ReactNode } from "react";

type LabelProps = {
	htmlFor?: string;
	children?: ReactNode;
};

const Label = ({ htmlFor, children }: LabelProps) => {
	return (
		<label
			htmlFor={htmlFor}
			className="select-none text-sm font-medium text-slate-700"
		>
			{children}
		</label>
	);
};

export { Label };
export type { LabelProps };
