import { RedeemTwoTone } from "@mui/icons-material";
import { Button, ListItem } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";
export interface SidebarMenuItemProps {
	title: string;
	path: string;
	closeSidebar: () => void;
	icon?: any;
}

const SidebarMenuItem = (props: SidebarMenuItemProps) => {
	const { closeSidebar, path, title, icon } = props;
	return (
		<ListItem component="div">
			<Button
				disableRipple
				component={RouterLink}
				onClick={closeSidebar}
				to={path}
				startIcon={icon ? icon : <RedeemTwoTone />}
			>
				{title}
			</Button>
		</ListItem>
	);
};

export default SidebarMenuItem;
