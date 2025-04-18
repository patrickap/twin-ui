import { AnimatePresence, motion } from "motion/react";
import { Tooltip as tooltip } from "radix-ui";
import { type ReactNode, useState } from "react";
import type { Direction } from "~/constants";
import type { ValueOf } from "~/types";

type TooltipProps = {
	position?: ValueOf<typeof Direction>;
	content?: ReactNode;
	children?: ReactNode;
};

const Tooltip = ({ position, content, children }: TooltipProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<tooltip.Provider delayDuration={0}>
			<tooltip.Root open={isOpen} onOpenChange={setIsOpen}>
				<tooltip.Trigger asChild>
					<div tabIndex={-1} className="max-w-fit">
						{children}
					</div>
				</tooltip.Trigger>
				<AnimatePresence>
					{isOpen ? (
						<tooltip.Portal forceMount>
							<tooltip.Content
								asChild
								side={position}
								sideOffset={8}
								className="z-10 rounded-lg bg-slate-900/75 p-2 px-3 text-sm text-white backdrop-blur-xs"
							>
								<motion.div
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.95 }}
									transition={{
										duration: 0.1,
									}}
								>
									{content}
									<tooltip.Arrow className="fill-slate-900/75 backdrop-blur-xs" />
								</motion.div>
							</tooltip.Content>
						</tooltip.Portal>
					) : null}
				</AnimatePresence>
			</tooltip.Root>
		</tooltip.Provider>
	);
};

export { Tooltip };
export type { TooltipProps };
