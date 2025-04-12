import type { Preview } from "@storybook/react";
// This import generates a warning in the console:
// Files in the public directory are served at the root path.
// Which can be ignored as it's not an issue in preview mode.
import "../public/index.css";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
