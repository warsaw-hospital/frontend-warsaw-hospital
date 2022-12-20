import axios from "axios";
import apiEndpoints from "constants/apiEndpoints";
import LoginRequest from "models/auth/LoginRequest";
import RegisterRequest from "models/auth/RegisterRequest";
import StatusResponse from "models/auth/StatusResponse";

const baseUrl = apiEndpoints.auth;
axios.defaults.withCredentials = true;

const AuthAPI = {
	login: (request: LoginRequest): Promise<boolean> =>
		axios.post(`${baseUrl}/login`, request),
	register: (request: RegisterRequest): Promise<boolean> =>
		axios.post(`${baseUrl}/register`, request),
	logout: (): Promise<void> => axios.post(`${baseUrl}/logout`),
	isLoggedIn: (): Promise<StatusResponse> => axios.get(`${baseUrl}/status`),

	doctorLogin: (request: LoginRequest): Promise<boolean> =>
		axios.post(`${baseUrl}/doctor-login`, request),
};

export default AuthAPI;
