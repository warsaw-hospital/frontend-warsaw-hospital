import {
	AccountCircleOutlined,
	Inventory,
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
		path: "/doctor/all",
		icon: LocalHospitalOutlined,
	},
	{
		title: "Some doctor",
		path: "/doctor/info/:id",
		icon: LocalHospitalOutlined,
	},
	{
		title: "Patient profile",
		path: "/patient/profile",
		icon: AccountCircleOutlined,
	},
	{
		title: "Account settings",
		path: "/patient/settings",
		icon: ManageAccountsOutlined,
	},
	{
		title: "Sandbox",
		path: "/sandbox",
		icon: Inventory,
	},
];

export default sidebarMenuItems;
