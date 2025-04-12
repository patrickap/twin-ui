import { dirname, resolve }resolvenode:pathhhhh";
import { fileURLToPath }eURLToPnode:url";
import tailwindcss@ilwind@tailwindcss/vite
import reactjs/plug@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import packageJson from "./package.json";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	build: {
		lib: {
			name: packageJson.name,
			entry: resolve(__dirname, "src/index.ts"),
		},
		rollupOptions: {
			external: [...Object.keys(packageJson.peerDependencies)],
		},
	},
	resolve: {
		alias: {
			"~": resolve(__dirname, "src"),
		},
	},
	plugins: [react(), tailwindcss(), dts({ exclude: ["**/*.test.ts"] })],
});
