import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Button, Tooltip } from "~/components";

export default {
	title: "Components/Tooltip",
	component: Tooltip,
} satisfies Meta<typeof Tooltip>;

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
