import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { CenterLayout } from "~/layouts";

export default {
	title: "Layouts/Center",
	component: CenterLayout,
} satisfies Meta<typeof CenterLayout>;

const render: StoryFn<typeof CenterLayout> = (args) => (
	<CenterLayout {...args}>This is centered</CenterLayout>
);

export const Default: StoryObj<typeof CenterLayout> = {
	render,
};
