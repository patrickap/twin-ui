import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Label } from "~/components";

export default {
	title: "Components/Label",
	component: Label,
} satisfies Meta<typeof Label>;

const render: StoryFn<typeof Label> = (args) => <Label {...args} />;

export const Default: StoryObj<typeof Label> = {
	render,
	args: {
		children: "Label",
	},
};
