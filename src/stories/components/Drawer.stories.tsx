import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Button, Drawer } from "~/components";

export const meta: Meta<typeof Drawer> = {
	title: "Components/Drawer",
	component: Drawer,
};

const render: StoryFn<typeof Drawer> = (args) => (
	<Drawer trigger={<Button>Open Drawer</Button>} {...args} />
);

export const Default: StoryObj<typeof Drawer> = {
	render,
};

export const Left: StoryObj<typeof Drawer> = {
	render,
	args: {
		position: "left",
	},
};

export const Right: StoryObj<typeof Drawer> = {
	render,
	args: {
		position: "right",
	},
};
