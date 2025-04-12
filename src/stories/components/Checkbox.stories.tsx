import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "~/components";

export const meta: Meta<typeof Checkbox> = {
	title: "Components/Checkbox",
	component: Checkbox,
};

const render: StoryFn<typeof Checkbox> = (args) => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<Checkbox
			{...args}
			isChecked={isChecked}
			onChange={(e) => setIsChecked(e.target.checked)}
		/>
	);
};

export const Default: StoryObj<typeof Checkbox> = {
	render,
	args: {
		label: "Checkbox",
	},
};

export const Disabled: StoryObj<typeof Checkbox> = {
	render,
	args: {
		label: "Checkbox",
		isDisabled: true,
	},
};

export const Error: StoryObj<typeof Checkbox> = {
	render,
	args: {
		label: "Checkbox",
		isError: true,
	},
};
