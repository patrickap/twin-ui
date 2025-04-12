import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { CenterLayout } from "~/layouts";
import { NotFoundPage, SignInPage } from "~/pages";

export default {
	title: "Pages/SignIn",
	component: NotFoundPage,
} satisfies Meta<typeof SignInPage>;

const render: StoryFn<typeof SignInPage> = (args) => (
	<CenterLayout>
		<SignInPage />
	</CenterLayout>
);

export const Default: StoryObj<typeof SignInPage> = {
	render,
};
