import { CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import NavBar from "components/common/NavBar";

import { useRoutes } from "react-router-dom";
import router from "router";
import "./AppRouter.css";

const AppRouter = () => {
	const content = useRoutes(router);
	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<CssBaseline />
			{content}
			<NavBar />
		</LocalizationProvider>
	);
};

export default AppRouter;
