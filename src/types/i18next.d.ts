import "i18next";
import type { resources } from "~/libs/i18next";

declare module "i18next" {
	interface CustomTypeOptions {
		resources: (typeof resources)["en"];
	}
}
