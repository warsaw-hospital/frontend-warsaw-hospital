import UserInfoResponse from "models/user/UserInfo";

interface CommonState {
	isDoctor?: boolean;
	me?: UserInfoResponse;
	actions: string[];
}

export default CommonState;
