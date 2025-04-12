import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { CenterLayout } from "~/layouts";
import { NotFoundPage } from "~/pages";

export default {
	title: "Pages/NotFound",
	component: NotFoundPage,
} satisfies Meta<typeof NotFoundPage>;

const render: StoryFn<typeof NotFoundPage> = (args) => (
	<CenterLayout>
		<NotFoundPage />
	</CenterLayout>
);

export const Default: StoryObj<typeof NotFoundPage> = {
	render,
};
