import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Input, InputPassword } from "~/components";

export default {
	title: "Components/Input",
	component: Input,
} satisfies Meta<typeof Input>;

const render: StoryFn<typeof Input> = (args) => {
	const [value, setValue] = useState("");

	const Component = args.type === "password" ? InputPassword : Input;

	return (
		<div className="max-w-sm">
			<Component
				label="Input"
				{...args}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
};

export const Default: StoryObj<typeof Input> = {
	render,
};

export const Text: StoryObj<typeof Input> = {
	render,
	args: {
		type: "text",
	},
};

export const Password: StoryObj<typeof Input> = {
	render,
	args: {
		type: "password",
	},
};

export const Placeholder: StoryObj<typeof Input> = {
	render,
	args: {
		placeholder: "Placeholder",
	},
};

export const Disabled: StoryObj<typeof Input> = {
	render,
	args: {
		isDisabled: true,
	},
};

export const Error: StoryObj<typeof Input> = {
	render,
	args: {
		error: "Required",
		isError: true,
	},
};
