import { v4 as uuidv4 } from "uuid";
import type { ToastProps } from "~/components";
import { useGlobalStore } from "~/stores";

const useToast = () => {
	const toasts = useGlobalStore((s) => s.toasts);
	const setToasts = useGlobalStore((s) => s.setToasts);

	const add = (toast: ToastProps) => {
		const id = toast.id ?? uuidv4();

		setToasts([...toasts, { ...toast, id }]);

		return id;
	};

	const remove = (id: string) => {
		setToasts(toasts.filter((toast) => toast.id !== id));
	};

	return { toasts, add, remove };
};

export { useToast };
