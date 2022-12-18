import { CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import common from "redux/common";
import { useAppSelector } from "redux/store/hooks";
import router from "router";
import "./AppRouter.css";

const AppRouter = () => {
	const content = useRoutes(router);
	const user = useAppSelector((state) => state.common.me);
	// useEffect(() => {
	// 	common.getAndSetUser();
	// 	console.log("user", user);
	// }, [content]);
	useEffect(() => {
		common.getAndSetMe();
		console.log("user", user);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<CssBaseline />
			{content}
		</LocalizationProvider>
	);
};

export default AppRouter;
