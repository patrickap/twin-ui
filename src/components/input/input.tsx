import clsx from "clsx";
import {
	type ChangeEventHandler,
	type FocusEventHandler,
	type ForwardedRef,
	type InputHTMLAttributes,
	type ReactNode,
	forwardRef,
	useId,
} from "react";
import { Label, Text } from "~/components";

type InputProps = {
	type?: InputHTMLAttributes<HTMLInputElement>["type"];
	label?: string;
	icon?: { left?: ReactNode; right?: ReactNode };
	placeholder?: string;
	value?: string;
	error?: string;
	isDisabled?: boolean;
	isError?: boolean;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
};

const Input = forwardRef(
	(
		{
			type = "text",
			label,
			icon,
			placeholder,
			value = "",
			error,
			isDisabled = false,
			isError = false,
			onChange,
			onBlur,
			...props
		}: InputProps,
		ref: ForwardedRef<HTMLInputElement>,
	) => {
		const id = useId();

		return (
			<div className="relative flex flex-col gap-1">
				{label ? <Label htmlFor={id}>{label}</Label> : null}

				<div className="relative">
					{icon?.left ? (
						<div className="absolute inset-y-0 left-0 flex items-center pl-3">
							<span className="h-5 w-5 text-slate-500">{icon.left}</span>
						</div>
					) : null}

					<input
						{...props}
						id={id}
						ref={ref}
						type={type}
						spellCheck={false}
						placeholder={placeholder}
						value={value}
						disabled={isDisabled}
						onChange={onChange}
						onBlur={onBlur}
						className={clsx(
							"block w-full rounded-lg border border-slate-300 shadow-xs focus:border-primary-500 focus:outline-hidden focus:ring-primary-500 sm:text-sm",
							icon?.left && "pl-9",
							icon?.right && "pr-9",
							isDisabled &&
								"cursor-not-allowed! border-slate-200! bg-slate-100! text-slate-300!",
							isError &&
								!isDisabled &&
								"border-red-500! text-red-500! focus:border-red-500! focus:ring-red-500!",
						)}
					/>

					{icon?.right ? (
						<div className="absolute inset-y-0 right-0 flex items-center pr-3">
							<span className="h-5 w-5 text-slate-500">{icon.right}</span>
						</div>
					) : null}
				</div>

				{isError && error && !isDisabled ? (
					<Text color="error">{error}</Text>
				) : null}
			</div>
		);
	},
);

export { Input };
export type { InputProps };
