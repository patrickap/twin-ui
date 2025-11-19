import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { type ForwardedRef, forwardRef, useState } from "react";
import { cn } from "~/utils";
import { Input, type InputProps } from "..";

type InputPasswordProps = InputProps;

const InputPassword = forwardRef(
	(props: InputPasswordProps, ref: ForwardedRef<HTMLInputElement>) => {
		const [isVisible, setIsVisible] = useState(false);

		const toggleVisibility = () => setIsVisible(!isVisible);

		return (
			<Input
				{...props}
				ref={ref}
				type={isVisible ? "text" : "password"}
				icon={{
					right: (
						<span
							onClick={toggleVisibility}
							className={cn(
								props.isDisabled && "cursor-not-allowed",
								!props.isDisabled && "cursor-pointer",
							)}
						>
							{isVisible ? <EyeIcon /> : <EyeSlashIcon />}
						</span>
					),
				}}
			/>
		);
	},
);

export { InputPassword };
export type { InputPasswordProps };

