import { v4 as uuidv4 } from "uuid";
import type { DialogProps } from "~/components";
import { useGlobalStore } from "~/stores";

const useDialog = () => {
	const dialogs = useGlobalStore((s) => s.dialogs);
	const setDialogs = useGlobalStore((s) => s.setDialogs);

	const open = (dialog: DialogProps) => {
		const id = dialog.id ?? uuidv4();

		setDialogs([...dialogs, { ...dialog, id }]);

		return id;
	};

	const close = (id: string) => {
		setDialogs(dialogs.filter((dialog) => dialog.id !== id));
	};

	return { dialogs, open, close };
};

export { useDialog };
