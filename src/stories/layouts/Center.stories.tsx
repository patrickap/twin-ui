import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { CenterLayout } from "~/layouts";

export const meta: Meta<typeof CenterLayout> = {
	title: "Layouts/Center",
	component: CenterLayout,
};

const render: StoryFn<typeof CenterLayout> = (args) => (
	<CenterLayout {...args}>This is centered</CenterLayout>
);

export const Default: StoryObj<typeof CenterLayout> = {
	render,
};
