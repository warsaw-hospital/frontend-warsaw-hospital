import UserRoleResponse from "models/user/UserRoleResponse";

interface UserInfo {
	name: string;
	lastname: string;
	email: string;
	phoneNumber: string;
	address: string;
	roles: UserRoleResponse[];
	isLoggedIn: boolean;
}

export default UserInfo;
