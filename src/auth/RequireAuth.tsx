import { Navigate } from "react-router-dom";
import { useAppSelector } from "redux/store/hooks";

interface RequireAuthProps {
	forAdmins?: boolean;
	children: any;
}

const RequireAuth = ({ forAdmins = false, children }: RequireAuthProps) => {
	const me = useAppSelector((state) => state.common.user);
	const isAdmin = useAppSelector((state) => state.common.isDoctor);

	// If user is not logged in, when do not show the page
	if (!me) {
		return null;
	}

	// If this page does not require admin role, then show page
	// Or if user has admin role and tries to reach admin pages, then show page
	if (!forAdmins || (forAdmins && isAdmin)) {
		return <>{children}</>;
	}

	// If user tries to reach admin pages, but does not have admin role, then return to main page
	return <Navigate to={"/home"} replace />;
};

export default RequireAuth;
