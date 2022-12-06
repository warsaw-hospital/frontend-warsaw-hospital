import { Box } from "@mui/material";
import Header from "components/common/Header";
import NavBar from "components/common/NavBar";
import routes from "constants/routes";
import RouteItem from "models/routes/RouteItem";
import { Route, Routes } from "react-router-dom";
import "./AppRouter.css";

const AppRouter = () => {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<NavBar />
			<Header />
			<Box className="app-container">
				<Routes>
					{[...routes[0].items, ...routes[1].items].map((route: RouteItem) => (
						<Route key={route.key} path={route.path} element={route.element} />
					))}
				</Routes>
			</Box>
		</div>
	);
};

export default AppRouter;
