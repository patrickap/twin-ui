import { AnimatePresence } from "framer-motion";
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
