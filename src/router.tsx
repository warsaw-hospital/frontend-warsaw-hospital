import React, { lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router";

import SidebarLayout from "layouts/SidebarLayout";
import BaseLayout from "layouts/BaseLayout";

import SuspenseLoader from "components/suspenseloader";

const Loader =
	(Component: LazyExoticComponent<() => JSX.Element>) =>
	(props: JSX.IntrinsicAttributes) =>
		(
			<Suspense fallback={<SuspenseLoader />}>
				<Component {...props} />
			</Suspense>
		);

// Pages

const HomePage = Loader(lazy(() => import("pages/home/HomePage")));
const SandboxPage = Loader(lazy(() => import("pages/sandbox/Sandbox")));

const routes: RouteObject[] = [
	{
		path: "",
		element: <BaseLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "overview",
				element: <Navigate to="/" replace />,
			},
			{
				path: "overview/home",
				element: <Navigate to="/" replace />,
				children: [
					{
						path: "overview/home",
						element: <Navigate to="/" replace />,
					},
				],
			},
		],
	},
	{
		path: "/sandbox",
		element: <SidebarLayout />,
		children: [
			{
				path: "sandbox",
				element: <SandboxPage />,
			},
			{
				path: "overview/sandbox",
				element: <Navigate to="/sandbox" replace />,
			},
			{
				path: "overview/sandbox/sandbox",
				element: <Navigate to="/sandbox" replace />,
				children: [
					{
						path: "overview/sandbox/sandbox",
						element: <Navigate to="/sandbox" replace />,
					},
				],
			},
		],
	},
];

export default routes;
