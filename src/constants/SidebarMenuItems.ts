import {
	AccountCircleOutlined,
	LocalHospitalOutlined,
	ManageAccountsOutlined,
} from "@mui/icons-material";

export interface SidebarMenuItemType {
	title: string;
	path: string;
	icon?: any;
}

const sidebarMenuItems: SidebarMenuItemType[] = [
	{
		title: "All Doctors",
		path: "/doctors",
		icon: LocalHospitalOutlined,
	},
	{
		title: "Patient profile",
		path: "/account/profile",
		icon: AccountCircleOutlined,
	},
	{
		title: "Account settings",
		path: "/account/settings",
		icon: ManageAccountsOutlined,
	},
];

export default sidebarMenuItems;
