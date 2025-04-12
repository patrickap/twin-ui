import {
	Button,
	Checkbox,
	InputPassword,
	InputText,
	Link,
	Text,
	Title,
} from "~/components";

const SignInPage = () => {
	return (
		<div className="flex w-full max-w-md flex-col gap-8">
			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-2 text-center">
					<Title order={2}>Sign in to your account</Title>
					<Text>
						Don't have an account? <Link>Sign up</Link>
					</Text>
				</div>
			</div>
			<div className="bg-transparent p-0 shadow-none sm:rounded-lg sm:bg-white sm:px-10 sm:py-8 sm:shadow-lg">
				<form className="flex flex-col gap-6">
					<InputText label="Username" />
					<InputPassword label="Password" />
					<div className="flex justify-between">
						<Checkbox label="Remember me" />
						<Link>Forgot password?</Link>
					</div>
					<Button type="submit" color="primary">
						Sign in
					</Button>
				</form>
			</div>
		</div>
	);
};

export { SignInPage };
