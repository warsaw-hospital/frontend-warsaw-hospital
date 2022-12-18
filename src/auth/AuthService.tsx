import { useEffect } from "react";
import { useAppSelector } from "redux/store/hooks";
import common from "redux/common";

const AuthService = () => {
	const user = useAppSelector((state) => state.common.me);

	useEffect(() => {
		if (!user) {
			common.getAndSetMe();
		} else {
			common.getAndSetActions();
		}
	}, [user]);

	return null;
};

export default AuthService;
