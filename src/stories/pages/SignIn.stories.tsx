import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { CenterLayout } from "~/layouts";
import { NotFoundPage, SignInPage } from "~/pages";

export const meta: Meta<typeof SignInPage> = {
	title: "Pages/SignIn",
	component: NotFoundPage,
};

const render: StoryFn<typeof SignInPage> = (args) => (
	<CenterLayout>
		<SignInPage />
	</CenterLayout>
);

export const Default: StoryObj<typeof SignInPage> = {
	render,
};
