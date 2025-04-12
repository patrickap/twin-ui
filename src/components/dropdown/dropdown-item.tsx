import { DropdownMenu as dropdown } from "radix-ui";
import type { ReactNode } from "react";

type DropdownItemProps = {
	icon?: ReactNode;
	onSelect?: (event: Event) => void;
	children?: ReactNode;
};

const DropdownItem = ({ icon, onSelect, children }: DropdownItemProps) => {
	return (
		<dropdown.Item
			onSelect={onSelect}
			className="group flex w-full cursor-pointer items-center gap-2 rounded-lg bg-white p-2 text-base text-slate-700 focus:outline-hidden data-highlighted:bg-primary-500 data-highlighted:text-white sm:text-sm"
		>
			{icon ? (
				<span className="h-5 w-5 text-slate-700 group-data-highlighted:text-white *:group-data-highlighted:text-white">
					{icon}
				</span>
			) : null}
			{children ? <>{children}</> : null}
		</dropdown.Item>
	);
};

export { DropdownItem };
export type { DropdownItemProps };
