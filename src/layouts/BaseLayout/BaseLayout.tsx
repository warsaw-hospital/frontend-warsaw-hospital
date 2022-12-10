import PropTypes from "prop-types";
import { ReactNode, useState } from "react";
import { Outlet } from "react-router-dom";

import { alpha, Box, lighten, useTheme } from "@mui/material";
import LoginDialog from "components/login/LoginDialog";
import RegisterDialog from "components/login/RegisterDialog";
import { useAppSelector } from "redux/store/hooks";
import BaseHeader from "./Header/BaseHeader";
import GuestHeader from "./Header/GuestHeader";
import BaseSidebar from "./Sidebar/BaseSidebar";

interface BaseLayoutProps {
	children?: ReactNode;
}

const BaseLayout = (props: BaseLayoutProps) => {
	const { children } = props;
	const isLoggedIn = useAppSelector((state) => state.common.user?.isLoggedIn);

	const [loginDialogOpen, setLoginDialogOpen] = useState(false);
	const [registerDialogOpen, setRegisterDialogOpen] = useState(false);
	const [isDoctor, setIsDoctor] = useState(false);

	const handleRegisterDialogOpen = () => {
		setRegisterDialogOpen(true);
	};

	const handleRegisterDialogClose = () => {
		setRegisterDialogOpen(false);
	};

	const handleLoginDialogOpen = (isDoctor?: boolean) => {
		setLoginDialogOpen(true);
		setIsDoctor(isDoctor ? true : false);
	};

	const handleLoginDialogClose = () => {
		setLoginDialogOpen(false);
		setIsDoctor(false);
	};

	const theme = useTheme();
	return (
		<>
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
				{isLoggedIn ? (
					<BaseHeader />
				) : (
					<GuestHeader handleLoginOpen={handleLoginDialogOpen} />
				)}

				<Box
					style={{
						display: "flex",
					}}
					sx={{}}
				>
					<Box
						display="block"
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							padding: "124px 64px 82px 96px",

							flex: 1,
						}}
					>
						{children || <Outlet />}
					</Box>
					<BaseSidebar />
				</Box>
			</Box>
			<LoginDialog
				open={loginDialogOpen}
				isDoctorLogin={isDoctor}
				handleClose={handleLoginDialogClose}
				handleRegisterOpen={handleRegisterDialogOpen}
				handleRegisterClose={handleRegisterDialogClose}
			/>
			<RegisterDialog
				open={registerDialogOpen}
				handleClose={handleRegisterDialogClose}
				handleLoginOpen={handleLoginDialogOpen}
			/>
		</>
	);
};

BaseLayout.propTypes = {
	children: PropTypes.node,
};
export default BaseLayout;
