import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { motion } from "motion/react";
import { AlertDialog as dialog } from "radix-ui";
import { Button, Text, Title } from "~/components";
import { Color } from "~/constants";
import { useDialog } from "~/hooks";
import type { ValueOf } from "~/types";

type DialogProps = {
	id?: string;
	color?: ValueOf<typeof Color>;
	title?: string;
	description?: string;
	onConfirm?: () => void;
	onCancel?: () => void;
};

const Dialog = ({
	id,
	color = "neutral",
	title,
	description,
	onConfirm,
	onCancel,
}: DialogProps) => {
	const { close } = useDialog();

	return (
		<dialog.Root>
			<dialog.Portal forceMount>
				<div className="relative z-10">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{
							duration: 0.3,
						}}
					>
						<dialog.Overlay className="fixed inset-0 z-10 bg-slate-500/50" />
					</motion.div>
				</div>

				<div className="fixed inset-0 z-10 flex h-screen w-screen flex-col items-center justify-center p-4">
					<motion.div
						layout
						key={id}
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						transition={{
							duration: 0.2,
						}}
					>
						<dialog.Content className="w-full max-w-lg overflow-hidden rounded-lg shadow-xl focus:outline-none">
							<div className="max-h-96 overflow-y-scroll rounded-t-lg bg-white p-6">
								<div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
									<div
										className={clsx(
											"flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
											color === Color.NEUTRAL && "bg-slate-100 text-slate-500",
											color === Color.PRIMARY &&
												"bg-primary-100 text-primary-500",
											color === Color.INFO && "bg-blue-100 text-blue-500",
											color === Color.WARNING &&
												"bg-yellow-100 text-yellow-500",
											color === Color.ERROR && "bg-red-100 text-red-500",
											color === Color.SUCCESS && "bg-green-100 text-green-500",
										)}
									>
										<ExclamationTriangleIcon className="h-6 w-6" />
									</div>
									<div className="flex flex-col gap-2 text-center sm:text-start">
										<dialog.Title asChild>
											<Title order={5}>{title}</Title>
										</dialog.Title>
										<dialog.Description asChild>
											<Text>{description}</Text>
										</dialog.Description>
									</div>
								</div>
							</div>
							<div className="flex flex-col-reverse justify-end gap-3 border border-t-slate-100 bg-slate-50 py-4 px-6 empty:hidden sm:flex-row">
								{onCancel ? (
									<dialog.Cancel asChild>
										<Button
											onClick={() => {
												onCancel();

												if (id) {
													close(id);
												}
											}}
										>
											Cancel
										</Button>
									</dialog.Cancel>
								) : null}

								{onConfirm ? (
									<dialog.Action asChild>
										<Button
											color={color}
											onClick={() => {
												onConfirm();

												if (id) {
													close(id);
												}
											}}
										>
											Confirm
										</Button>
									</dialog.Action>
								) : null}
							</div>
						</dialog.Content>
					</motion.div>
				</div>
			</dialog.Portal>
		</dialog.Root>
	);
};

export { Dialog };
export type { DialogProps };
