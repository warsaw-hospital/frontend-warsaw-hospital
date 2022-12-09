import { createContext, useState } from "react";
type SidebarContext = {
	isSidebarOpen: boolean;
	toggleSidebar: () => void;
	closeSidebar: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SidebarContext = createContext<SidebarContext>(
	{} as SidebarContext
);

interface SidebarProviderProps {
	children: React.ReactNode;
}
export const SidebarProvider = (props: SidebarProviderProps) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	return (
		<SidebarContext.Provider
			value={{ isSidebarOpen, toggleSidebar, closeSidebar }}
		>
			{props.children}
		</SidebarContext.Provider>
	);
};
