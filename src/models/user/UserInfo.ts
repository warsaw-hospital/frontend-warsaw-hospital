import UserRoleResponse from "models/userrole/UserRoleResponse";

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
