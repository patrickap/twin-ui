import {
	CheckCircleIcon,
	ExclamationTriangleIcon,
	InformationCircleIcon,
	XCircleIcon,
} from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { motion } from "motion/react";
import { Toast as toast } from "radix-ui";
import { useEffect } from "react";
import { ButtonIcon, Spinner, Text, Title } from "~/components";
import { Color } from "~/constants";
import { useToast } from "~/hooks";
import type { ValueOf } from "~/types";

type ToastProps = {
	id?: string;
	color?: ValueOf<typeof Color>;
	title?: string;
	description?: string;
	duration?: number;
	isLoading?: boolean;
};

const Toast = ({
	id,
	color = "neutral",
	title,
	description,
	duration = 5000,
	isLoading,
}: ToastProps) => {
	const { remove } = useToast();

	// biome-ignore lint/correctness/useExhaustiveDependencies:
	useEffect(() => {
		if (!id || !duration) {
			return;
		}

		const timeoutId = setTimeout(() => {
			remove(id);
			clearTimeout(timeoutId);
		}, duration);

		return () => {
			clearTimeout(timeoutId);
		};
	}, []);

	return (
		<toast.Root asChild forceMount>
			<motion.div
				layout
				key={id}
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.95 }}
				transition={{
					duration: 0.2,
				}}
				className="relative flex max-w-sm gap-4 rounded-lg bg-white p-4 text-sm shadow-lg outline-hidden"
			>
				<div
					className={clsx(
						"flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
						color === Color.NEUTRAL && "bg-slate-100 text-slate-500",
						color === Color.PRIMARY && "bg-primary-100 text-primary-500",
						color === Color.INFO && "bg-blue-100 text-blue-500",
						color === Color.WARNING && "bg-yellow-100 text-yellow-500",
						color === Color.ERROR && "bg-red-100 text-red-500",
						color === Color.SUCCESS && "bg-green-100 text-green-500",
					)}
				>
					{isLoading ? (
						<Spinner />
					) : color === Color.NEUTRAL ||
						color === Color.PRIMARY ||
						color === Color.INFO ? (
						<InformationCircleIcon className="h-5 w-5" />
					) : color === Color.WARNING ? (
						<ExclamationTriangleIcon className="h-5 w-5" />
					) : color === Color.ERROR ? (
						<XCircleIcon className="h-5 w-5" />
					) : color === Color.SUCCESS ? (
						<CheckCircleIcon className="h-5 w-5" />
					) : null}
				</div>
				<div className="flex flex-col gap-2">
					<toast.Title asChild>
						<Title order={6}>{title}</Title>
					</toast.Title>
					<toast.Description asChild>
						<Text>{description}</Text>
					</toast.Description>
				</div>
				<div className="absolute top-3 right-3">
					<toast.Close asChild>
						<ButtonIcon size={1} onClick={() => (id ? remove(id) : null)}>
							<XMarkIcon className="h-5 w-5" />
						</ButtonIcon>
					</toast.Close>
				</div>
			</motion.div>
		</toast.Root>
	);
};

export { Toast };
export type { ToastProps };
