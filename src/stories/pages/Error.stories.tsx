import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { CenterLayout } from "~/layouts";
import { ErrorPage } from "~/pages";

export const meta: Meta<typeof ErrorPage> = {
	title: "Pages/Error",
	component: ErrorPage,
};

const render: StoryFn<typeof ErrorPage> = (args) => (
	<CenterLayout>
		<ErrorPage />
	</CenterLayout>
);

export const Default: StoryObj<typeof ErrorPage> = {
	render,
};
