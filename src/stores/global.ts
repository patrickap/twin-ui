import { create } from "zustand";
import type { DialogProps, ToastProps } from "~/components";

type GlobalState = {
	toasts: ToastProps[];
	dialogs: DialogProps[];
	setToasts: (toasts: ToastProps[]) => void;
	setDialogs: (dialogs: DialogProps[]) => void;
};

const useGlobalStore = create<GlobalState>((set) => ({
	toasts: [],
	dialogs: [],
	setToasts: (toasts: ToastProps[]) => set((state) => ({ ...state, toasts })),
	setDialogs: (dialogs: DialogProps[]) =>
		set((state) => ({ ...state, dialogs })),
}));

export { useGlobalStore };
export type { GlobalState };
