import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Text } from "~/components";

export default {
	title: "Components/Text",
	component: Text,
} satisfies Meta<typeof Text>;

const render: StoryFn<typeof Text> = (args) => (
	<div className="max-w-sm">
		<Text {...args}>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
			eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
			clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
			amet. <br /> <br />
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
			eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. <br /> <br />
			At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
			gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
			ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
			tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua.
		</Text>
	</div>
);

export const Default: StoryObj<typeof Text> = {
	render,
};

export const Primary: StoryObj<typeof Text> = {
	render,
	args: {
		color: "primary",
	},
};

export const Neutral: StoryObj<typeof Text> = {
	render,
	args: {
		color: "neutral",
	},
};

export const Info: StoryObj<typeof Text> = {
	render,
	args: {
		color: "info",
	},
};

export const Warning: StoryObj<typeof Text> = {
	render,
	args: {
		color: "warning",
	},
};

export const Error: StoryObj<typeof Text> = {
	render,
	args: {
		color: "error",
	},
};

export const Success: StoryObj<typeof Text> = {
	render,
	args: {
		color: "success",
	},
};
