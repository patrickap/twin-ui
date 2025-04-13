import type { ReactNode } from "react";
import "~/index.css";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	return <>{children}</>;
};

export { ThemeProvider };
