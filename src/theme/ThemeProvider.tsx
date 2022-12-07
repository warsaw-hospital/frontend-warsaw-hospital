import { ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { themeCreator } from "./base";

export const ThemeContext = React.createContext(
	(themeName: string): void => {}
);

interface ThemeProviderWrapperProps {
	children: React.ReactNode;
}

const ThemeProviderWrapper = (props: ThemeProviderWrapperProps) => {
	const curThemeName =
		localStorage.getItem("appTheme") || "AppTheme" || "PureLightTheme";
	const [themeName, _setThemeName] = useState(curThemeName);
	const theme = themeCreator(themeName);
	const setThemeName = (themeName: string): void => {
		localStorage.setItem("appTheme", themeName);
		_setThemeName(themeName);
	};

	return (
		<ThemeContext.Provider value={setThemeName}>
			<ThemeProvider theme={theme}>{props.children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export default ThemeProviderWrapper;
