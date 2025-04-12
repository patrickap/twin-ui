import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Spinner } from "~/components";

export default {
	title: "Components/Spinner",
	component: Spinner,
} satisfies Meta<typeof Spinner>;

const render: StoryFn<typeof Spinner> = (args) => <Spinner {...args} />;

export const Default: StoryObj<typeof Spinner> = {
	render,
};

export const Inverted: StoryObj<typeof Spinner> = {
	render,
	args: {
		theme: "dark",
	},
};
