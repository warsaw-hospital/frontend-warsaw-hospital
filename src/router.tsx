import { RouteObject } from "react-router";
import { Navigate } from "react-router-dom";

import BaseLayout from "layouts/BaseLayout/BaseLayout";

import StatusComingSoon from "pages/status/ComingSoonPage";
import StatusMaintenance from "pages/status/MaintenancePage";
import Status404 from "pages/status/Status404Page";
import Status500 from "pages/status/Status500Page";
import DoctorInfoPage from "pages/doctors/DoctorInfoPage";
import DoctorListPage from "pages/doctors/DoctorListPage";
import PatientProfile from "pages/patient/PatientProfile";
import HomePage from "pages/home/HomePage";

const router: RouteObject[] = [
	{
		path: "",
		children: [
			{
				path: "doctor",
				element: <BaseLayout />,
				children: [
					{
						path: "info/:id",
						element: <DoctorInfoPage />,
					},
					{
						id: "admin",
						path: "all",
						index: false,
						element: <DoctorListPage />,
					},
				],
			},
			{
				path: "",
				element: <BaseLayout />,
				children: [
					{
						path: "",
						element: <HomePage />,
					},
				],
			},
			{
				path: "/patient",
				element: <BaseLayout />,
				children: [
					{
						path: "profile",
						element: <PatientProfile />,
					},
				],
			},
			{
				// Status pages
				path: "status",
				children: [
					{
						path: "",
						element: <Navigate to="/404" replace />,
					},
					{
						path: "404",
						element: <Status404 />,
					},
					{
						path: "500",
						element: <Status500 />,
					},
					{
						path: "maintenance",
						element: <StatusMaintenance />,
					},
					{
						path: "coming-soon",
						element: <StatusComingSoon />,
					},
				],
			},
			{
				path: "home",
				element: <Navigate to="/" replace />,
				children: [
					{
						path: "",
						element: <Navigate to="/" replace />,
					},
				],
			},
			{
				path: "*",
				element: <Status404 />,
			},
		],
	},
	{},
];

export default router;
