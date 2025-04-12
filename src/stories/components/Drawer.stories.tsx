import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Button, Drawer } from "~/components";

export default {
	title: "Components/Drawer",
	component: Drawer,
} satisfies Meta<typeof Drawer>;

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
