import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Title } from "~/components";

export const meta: Meta<typeof Title> = {
	title: "Components/Title",
	component: Title,
};

const render: StoryFn<typeof Title> = (args) => (
	<Title {...args}>Heading {args.order}</Title>
);

export const Default: StoryObj<typeof Title> = {
	render,
};

export const H1: StoryObj<typeof Title> = {
	render,
	args: {
		order: 1,
	},
};

export const H2: StoryObj<typeof Title> = {
	render,
	args: {
		order: 2,
	},
};

export const H3: StoryObj<typeof Title> = {
	render,
	args: {
		order: 3,
	},
};

export const H4: StoryObj<typeof Title> = {
	render,
	args: {
		order: 4,
	},
};

export const H5: StoryObj<typeof Title> = {
	render,
	args: {
		order: 5,
	},
};

export const H6: StoryObj<typeof Title> = {
	render,
	args: {
		order: 6,
	},
};
