import axios from "axios";
import apiEndpoints from "constants/apiEndpoints";
import LoginRequest from "models/auth/LoginRequest";
import RegisterRequest from "models/auth/RegisterRequest";
import StatusResponse from "models/auth/StatusResponse";

const baseUrl = apiEndpoints.auth;

const AuthAPI = {
	isLoggedIn: (): Promise<StatusResponse> => axios.get(`${baseUrl}/status`),
	login: (request: LoginRequest): Promise<boolean> =>
		axios.post(`${baseUrl}/login`, request),
	register: (request: RegisterRequest): Promise<boolean> =>
		axios.post(`${baseUrl}/register`, request),
	logout: (): Promise<void> => axios.post(`${baseUrl}/logout`),
};

export default AuthAPI;
