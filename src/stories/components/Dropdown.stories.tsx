import {
	CloudArrowDownIcon,
	CursorArrowRippleIcon,
	DocumentDuplicateIcon,
	PaperClipIcon,
	PencilSquareIcon,
	TrashIcon,
	ViewfinderCircleIcon,
} from "@heroicons/react/24/outline";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Button, Dropdown, DropdownDivider, DropdownItem } from "~/components";

export default {
	title: "Components/Dropdown",
	component: Dropdown,
} satisfies Meta<typeof Dropdown>;

const render: StoryFn<typeof Dropdown> = (args) => (
	<Dropdown
		align="start"
		position="bottom"
		trigger={<Button>Open Dropdown</Button>}
		{...args}
	>
		<DropdownItem icon={<ViewfinderCircleIcon />}>View</DropdownItem>
		<DropdownItem icon={<PaperClipIcon />}>Share</DropdownItem>
		<DropdownDivider />
		<DropdownItem icon={<CursorArrowRippleIcon />}>Move</DropdownItem>
		<DropdownItem icon={<PencilSquareIcon />}>Rename</DropdownItem>
		<DropdownItem icon={<DocumentDuplicateIcon />}>Duplicate</DropdownItem>
		<DropdownDivider />
		<DropdownItem icon={<CloudArrowDownIcon />}>Download</DropdownItem>
		<DropdownItem icon={<TrashIcon className="text-red-500" />}>
			Delete
		</DropdownItem>
	</Dropdown>
);

export const Default: StoryObj<typeof Dropdown> = {
	render,
};
