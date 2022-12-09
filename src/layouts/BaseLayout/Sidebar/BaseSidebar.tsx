import Scrollbar from "components/scrollbar";
import { SidebarContext } from "contexts/SidebarContext";
import { useContext } from "react";

import { Box, darken, Divider, Drawer, styled, useTheme } from "@mui/material";

import SidebarMenu from "./BaseSidebarMenu";

const SidebarWrapper = styled(Box)(
	({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 68px;
`
);

const Sidebar = () => {
	const { isSidebarOpen = false, toggleSidebar } = useContext(SidebarContext);
	const closeSidebar = () => toggleSidebar();
	const theme = useTheme();

	return (
		<>
			r{" "}
			<Drawer
				sx={{
					boxShadow: `${theme.sidebar.boxShadow}`,
				}}
				anchor={theme.direction === "rtl" ? "right" : "left"}
				open={isSidebarOpen}
				onClose={closeSidebar}
				variant="temporary"
				elevation={9}
			>
				<SidebarWrapper
					sx={{
						background:
							theme.palette.mode === "dark"
								? theme.colors.alpha.white[100]
								: darken(theme.colors.alpha.black[100], 0.5),
					}}
				>
					<Scrollbar>
						<Box mt={3}>
							<Box
								mx={2}
								sx={{
									width: 52,
								}}
							>
								{/* <Logo /> */}
							</Box>
						</Box>
						<Divider
							sx={{
								mt: theme.spacing(3),
								mx: theme.spacing(2),
								background: theme.colors.alpha.trueWhite[10],
							}}
						/>
						<SidebarMenu />
					</Scrollbar>
				</SidebarWrapper>
			</Drawer>
		</>
	);
};

export default Sidebar;
