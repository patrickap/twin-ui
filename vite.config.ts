import tailwind from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss as css } from "vite-plugin-lib-inject-css";
import { viteStaticCopy as copy } from "vite-plugin-static-copy";
import packageJson from "./package.json";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	build: {
		lib: {
			name: packageJson.name,
			entry: resolve(__dirname, "src/index.ts"),
			cssFileName: "index",
		},
		rollupOptions: {
			external: [...Object.keys(packageJson.peerDependencies)],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
	resolve: {
		alias: {
			"~": resolve(__dirname, "src"),
		},
	},
	plugins: [
		react(),
		tailwind(),
		dts({ exclude: ["**/*.test.ts"] }),
		copy({
			targets: [
				{
					src: "src/assets",
					dest: ".",
				},
			],
		}),
		css(),
	],
});
