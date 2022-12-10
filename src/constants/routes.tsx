import RouteGroup from "models/routes/RouteGroup";
import DoctorInfoPage from "pages/doctors/DoctorInfoPage";
import DoctorListPage from "pages/doctors/DoctorListPage";
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
				path: "/doctor/info",
				key: "doctor-info",
				pageTitle: "Doctor Info",
				element: <DoctorInfoPage />,
			},
			{
				path: "/doctor/all",
				key: "doctor-info",
				pageTitle: "Doctor Info",
				element: <DoctorListPage />,
			},
		],
	},
	{
		group: "Admin",
		items: [],
	},
];

export default routes;
