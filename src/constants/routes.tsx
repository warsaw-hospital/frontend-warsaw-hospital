import RouteGroup from "models/routes/RouteGroup";
import DoctorInfoPage from "pages/doctor/DoctorInfoPage";
import HomePage from "pages/home/HomePage";
import Sandbox from "pages/sandbox/Sandbox";

const routes: RouteGroup[] = [
	{
		group: "Menu",
		items: [
			{
				path: "/",
				key: "home",
				pageTitle: "Home",
				element: <HomePage />,
			},
			{
				path: "/sandbox",
				key: "sandbox",
				pageTitle: "Sandbox",
				element: <Sandbox />,
			},
			{
				path: "/doctor-info",
				key: "doctor-info",
				pageTitle: "Doctor Info",
				element: <DoctorInfoPage />,
			},
		],
	},
	{
		group: "Admin",
		items: [],
	},
];

export default routes;
