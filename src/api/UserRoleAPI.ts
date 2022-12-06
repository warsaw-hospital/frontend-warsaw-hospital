import axios from "axios";
import apiEndpoints from "constants/apiEndpoints";
import UserRoleResponse from "models/user/UserRoleResponse";

const baseAdminUrl = apiEndpoints.userRoleAdmin;

const UserRoleAPI = {
	findAll: (): Promise<UserRoleResponse[]> => axios.get(baseAdminUrl),
	findById: (id: number): Promise<UserRoleResponse> =>
		axios.get(`${baseAdminUrl}/${id}`),
};

export default UserRoleAPI;
