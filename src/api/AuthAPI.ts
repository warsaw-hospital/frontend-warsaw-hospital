import axios from "axios";
import apiEndpoints from "constants/apiEndpoints";
import LoginRequest from "models/auth/LoginRequest";
import RegisterRequest from "models/auth/RegisterRequest";
import StatusResponse from "models/auth/StatusResponse";

const baseUrl = apiEndpoints.auth;

const AuthAPI = {
	login: (request: LoginRequest): Promise<boolean> =>
		axios.post(`${baseUrl}/login`, request, {
			withCredentials: true,
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
		}),
	register: (request: RegisterRequest): Promise<boolean> =>
		axios.post(`${baseUrl}/register`, request),
	logout: (): Promise<void> => axios.post(`${baseUrl}/logout`),
	isLoggedIn: (): Promise<StatusResponse> =>
		axios.get(`${baseUrl}/status`, {
			withCredentials: true,
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
		}),

	doctorLogin: (request: LoginRequest): Promise<boolean> =>
		axios.post(`${baseUrl}/doctor-login`, request),
};

export default AuthAPI;
