import { AnimatePresence } from "motion/react";
import { useDialog } from "~/hooks";
import { Dialog } from ".";

const Dialogs = () => {
	const { dialogs } = useDialog();

	return (
		<AnimatePresence>
			{dialogs?.map((props) => (
				<Dialog {...props} key={props.id} />
			))}
		</AnimatePresence>
	);
};

export { Dialogs };
