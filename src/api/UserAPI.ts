import axios from "axios";
import apiEndpoints from "constants/apiEndpoints";
import UserInfo from "models/user/UserInfo";
import UserRequest from "models/user/UserRequest";

const baseUrl = apiEndpoints.user;
const baseAdminUrl = apiEndpoints.userAdmin;
axios.defaults.withCredentials = true;

const UserAPI = {
	//User endpoints
	getUserInfo: (): Promise<UserInfo> => axios.get(`${baseUrl}/me`),
	changeUserInfo: (request: UserRequest): Promise<UserInfo> =>
		axios.put(`${baseUrl}/change/info`, request),

	//Admin/Doctor endpoints
	findById: (id: number): Promise<UserInfo> =>
		axios.get(`${baseAdminUrl}/${id}`),
};

export default UserAPI;
