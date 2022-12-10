import { useEffect } from "react";
import { useAppSelector } from "redux/store/hooks";
import common from "redux/common";

const AuthService = () => {
	const user = useAppSelector((state) => state.common.user);

	useEffect(() => {
		if (!user) {
			common.getAndSetUser();
		} else {
			common.getAndSetActions();
		}
	}, [user]);

	return null;
};

export default AuthService;
