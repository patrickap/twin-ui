import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Link } from "~/components";

export const meta: Meta<typeof Link> = {
	title: "Components/Link",
	component: Link,
};

const render: StoryFn<typeof Link> = (args) => <Link {...args} />;

export const Default: StoryObj<typeof Link> = {
	render,
	args: {
		href: "",
		children: "Link",
	},
};
