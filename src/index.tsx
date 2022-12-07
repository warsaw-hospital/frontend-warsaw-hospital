import AppRouter from "AppRouter";
import { SidebarProvider } from "contexts/SidebarContext";
import "nprogress/nprogress.css";

import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import setupAxiosInterceptors from "redux/setupAxiosInterceptors";
import ThemeProviderWrapper from "theme/ThemeProvider";

import "./index.css";

setupAxiosInterceptors();

ReactDOM.render(
	<HelmetProvider>
		<SidebarProvider>
			<BrowserRouter>
				<ThemeProviderWrapper>
					<AppRouter />
				</ThemeProviderWrapper>
			</BrowserRouter>
		</SidebarProvider>
	</HelmetProvider>,
	document.getElementById("root")
);
