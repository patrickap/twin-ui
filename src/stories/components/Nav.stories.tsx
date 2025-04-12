import { HomeIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Nav, NavItem } from "~/components";

export const meta: Meta<typeof Nav> = {
	title: "Components/Nav",
	component: Nav,
};

const render: StoryFn<typeof Nav> = (args) => {
	const [active, setActive] = useState(0);

	return (
		<div className="max-w-sm">
			<Nav {...args}>
				{[1, 2, 3, 4, 5].map((item) => {
					return (
						<NavItem
							key={item}
							icon={<HomeIcon />}
							isActive={item === active}
							onClick={() => setActive(item)}
						>
							Item {item}
						</NavItem>
					);
				})}
			</Nav>
		</div>
	);
};

export const Default: StoryObj<typeof Nav> = {
	render,
};
