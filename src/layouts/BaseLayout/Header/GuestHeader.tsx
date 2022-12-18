import { useContext } from "react";

import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import {
	alpha,
	Box,
	Button,
	IconButton,
	lighten,
	styled,
	Tooltip,
	useTheme,
} from "@mui/material";
import { SidebarContext } from "contexts/SidebarContext";

import { LockOpenTwoTone } from "@mui/icons-material";
import HeaderButtons from "./HeaderButtons";

interface GuestHeaderProps {
	handleLoginOpen: (isDoctor?: boolean) => void;
}

const GuestHeader = (props: GuestHeaderProps) => {
	const { isSidebarOpen = false, toggleSidebar } = useContext(SidebarContext);
	const theme = useTheme();

	return (
		<HeaderWrapper
			display="flex"
			alignItems="center"
			sx={{
				boxShadow:
					theme.palette.mode === "dark"
						? `0 1px 0 ${alpha(
								lighten(theme.colors.primary.main, 0.7),
								0.15
						  )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
						: `0px 2px 8px -3px ${alpha(
								theme.colors.alpha.black[100],
								0.2
						  )}, 0px 5px 22px -4px ${alpha(
								theme.colors.alpha.black[100],
								0.1
						  )}`,
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					marginLeft: "32px",
				}}
			>
				<Tooltip arrow title="Toggle Menu">
					<IconButton color="primary" onClick={toggleSidebar}>
						{!isSidebarOpen ? (
							<MenuTwoToneIcon fontSize="small" />
						) : (
							<CloseTwoToneIcon fontSize="small" />
						)}
					</IconButton>
				</Tooltip>
			</div>
			<Box
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Box sx={{ m: 1 }}>
					<Button
						color="primary"
						fullWidth
						onClick={() => props.handleLoginOpen()}
					>
						<LockOpenTwoTone sx={{ mr: 1 }} />
						Login
					</Button>
				</Box>
				<Box sx={{ m: 1 }}>
					<Button
						color="primary"
						fullWidth
						onClick={() => props.handleLoginOpen(true)}
					>
						<LockOpenTwoTone sx={{ mr: 1 }} />
						Doctor Login
					</Button>
				</Box>
				<div
					style={{
						marginLeft: "8px",
					}}
				>
					<HeaderButtons />
				</div>
			</Box>
		</HeaderWrapper>
	);
};

const HeaderWrapper = styled(Box)(
	({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        background-color: ${alpha(theme.header.background as string, 0.95)};
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
`
);

export default GuestHeader;
