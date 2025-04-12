import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Button, Tooltip } from "~/components";

export const meta: Meta<typeof Tooltip> = {
	title: "Components/Tooltip",
	component: Tooltip,
};

const render: StoryFn<typeof Tooltip> = (args) => (
	<Tooltip {...args}>
		<Button>Hover Me</Button>
	</Tooltip>
);

export const Default: StoryObj<typeof Tooltip> = {
	render,
	args: {
		content: "Tooltip",
	},
};
