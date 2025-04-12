import { Button, Text, Title } from "~/components";

const ErrorPage = () => {
	return (
		<>
			<Title order={1}>Error</Title>
			<Text>An unknown error occurred</Text>

			<div className="mt-4">
				<Button onClick={() => window.location.reload()}>Reload site</Button>
			</div>
		</>
	);
};

export { ErrorPage };
