import AppRouter from "AppRouter";
import { SidebarProvider } from "contexts/SidebarContext";
import "nprogress/nprogress.css";

import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import setupAxiosInterceptors from "redux/services/setupAxiosInterceptors";
import { store } from "redux/store/rootReducer";
import ThemeProviderWrapper from "theme/ThemeProvider";

import "./index.css";

setupAxiosInterceptors();

ReactDOM.render(
	<HelmetProvider>
		<SidebarProvider>
			<BrowserRouter>
				<Provider store={store}>
					<ThemeProviderWrapper>
						<AppRouter />
					</ThemeProviderWrapper>
				</Provider>
			</BrowserRouter>
		</SidebarProvider>
	</HelmetProvider>,
	document.getElementById("root")
);
