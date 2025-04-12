import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Button, Dialog, Dialogs } from "~/components";
import { useDialog } from "~/hooks";

export default {
	title: "Components/Dialog",
	component: Dialog,
} satisfies Meta<typeof Dialog>;

const render: StoryFn<typeof Dialog> = (args) => {
	const dialog = useDialog();

	return (
		<>
			<Button
				onClick={() =>
					dialog.open({
						title: "Dialog",
						description:
							"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
						onCancel: () => {},
						onConfirm: () => {},
						...args,
					})
				}
			>
				Open Dialog
			</Button>
			<Dialogs />
		</>
	);
};

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
