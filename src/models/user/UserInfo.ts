import UserRoleResponse from "models/user/UserRoleResponse";

interface UserInfo {
	name: string;
	lastname: string;
	email: string;
	phoneNumber: string;
	address: string;
	roles: UserRoleResponse[];
	loggedIn: boolean;
}

export default UserInfo;
