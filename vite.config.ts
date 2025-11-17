import tailwind from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import packageJson from "./package.json";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [
		react(),
		tailwind(),
		dts({ tsconfigPath: "./tsconfig.build.json", rollupTypes: true }),
	],
	resolve: {
		alias: {
			"~": resolve(__dirname, "src"),
		},
	},
	build: {
		lib: {
			name: packageJson.name,
			entry: resolve(__dirname, "src/index.ts"),
			fileName: "index",
			formats: ["es", "cjs"],
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
});
