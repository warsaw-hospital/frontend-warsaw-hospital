import UserInfoResponse from "models/user/UserInfo";

interface CommonState {
	isDoctor?: boolean;
	user?: UserInfoResponse;

	actions: string[];
}

export default CommonState;
