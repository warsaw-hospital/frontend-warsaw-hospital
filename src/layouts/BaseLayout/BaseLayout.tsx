import PropTypes from "prop-types";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import { alpha, Box, lighten, useTheme } from "@mui/material";
import BaseHeader from "./Header/BaseHeader";
import BaseSidebar from "./Sidebar/BaseSidebar";
import { useAppSelector } from "redux/store/hooks";

interface BaseLayoutProps {
	children?: ReactNode;
}

const BaseLayout = (props: BaseLayoutProps) => {
	const isLoggedIn = useAppSelector((state) => state.common.user?.isLoggedIn);
	const { children } = props;

	const theme = useTheme();
	return (
		<Box
			sx={{
				flex: 1,
				height: "100%",
				width: "100%",

				".MuiPageTitle-wrapper": {
					background:
						theme.palette.mode === "dark"
							? theme.colors.alpha.trueWhite[5]
							: theme.colors.alpha.white[50],
					marginBottom: `${theme.spacing(4)}`,
					boxShadow:
						theme.palette.mode === "dark"
							? `0 1px 0 ${alpha(
									lighten(theme.colors.primary.main, 0.7),
									0.15
							  )}, 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)`
							: `0px 2px 4px -3px ${alpha(
									theme.colors.alpha.black[100],
									0.1
							  )}, 0px 5px 12px -4px ${alpha(
									theme.colors.alpha.black[100],
									0.05
							  )}`,
				},
			}}
		>
			{/* {isLoggedIn && <BaseHeader />} */}
			<BaseHeader />

			{/* {isLoggedIn && <BaseSidebar />} */}
			<BaseSidebar />
			<Box
				sx={{
					position: "relative",
					zIndex: 5,
					display: "block",
					flex: 1,
					pt: `${theme.header.height}`,
					[theme.breakpoints.up("lg")]: {
						ml: `${theme.sidebar.width}`,
					},
				}}
			>
				<Box display="block">{children || <Outlet />}</Box>
			</Box>
		</Box>
	);
};

BaseLayout.propTypes = {
	children: PropTypes.node,
};
export default BaseLayout;
