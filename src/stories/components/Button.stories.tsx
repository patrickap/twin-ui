import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Button } from "~/components";

export default {
	title: "Components/Button",
	component: Button,
} satisfies Meta<typeof Button>;

const render: StoryFn<typeof Button> = (args) => (
	<Button {...args}>Button</Button>
);

export const Default: StoryObj<typeof Button> = {
	render,
};

export const Primary: StoryObj<typeof Button> = {
	render,
	args: {
		color: "primary",
	},
};

export const Neutral: StoryObj<typeof Button> = {
	render,
	args: {
		color: "neutral",
	},
};

export const Info: StoryObj<typeof Button> = {
	render,
	args: {
		color: "info",
	},
};

export const Warning: StoryObj<typeof Button> = {
	render,
	args: {
		color: "warning",
	},
};

export const Error: StoryObj<typeof Button> = {
	render,
	args: {
		color: "error",
	},
};

export const Success: StoryObj<typeof Button> = {
	render,
	args: {
		color: "success",
	},
};

export const Loading: StoryObj<typeof Button> = {
	render,
	args: {
		isLoading: true,
	},
};

export const Disabled: StoryObj<typeof Button> = {
	render,
	args: {
		isDisabled: true,
	},
};
