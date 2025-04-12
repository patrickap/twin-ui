import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Button, Toast, Toasts } from "~/components";
import { useToast } from "~/hooks";

export default {
	title: "Components/Toast",
	component: Toast,
} satisfies Meta<typeof Toast>;

const render: StoryFn<typeof Toast> = (args) => {
	const toast = useToast();

	return (
		<>
			<Button
				onClick={() =>
					toast.add({
						title: "Toast",
						description:
							"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
						...args,
					})
				}
			>
				Add Toast
			</Button>
			<Toasts />
		</>
	);
};

export const Default: StoryObj<typeof Toast> = {
	render,
};

export const Primary: StoryObj<typeof Toast> = {
	render,
	args: {
		color: "primary",
	},
};

export const Neutral: StoryObj<typeof Toast> = {
	render,
	args: {
		color: "neutral",
	},
};

export const Info: StoryObj<typeof Toast> = {
	render,
	args: {
		color: "info",
	},
};

export const Warning: StoryObj<typeof Toast> = {
	render,
	args: {
		color: "warning",
	},
};

export const Error: StoryObj<typeof Toast> = {
	render,
	args: {
		color: "error",
	},
};

export const Success: StoryObj<typeof Toast> = {
	render,
	args: {
		color: "success",
	},
};

export const Loading: StoryObj<typeof Toast> = {
	render,
	args: {
		isLoading: true,
	},
};
