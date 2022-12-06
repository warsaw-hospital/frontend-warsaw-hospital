import axios from "axios";
import apiEndpoints from "constants/apiEndpoints";
import AppointmentDoctorRequest from "models/appointment/AppointmentDoctorRequest";
import AppointmentFilter from "models/appointment/AppointmentFilter";
import AppointmentResponse from "models/appointment/AppointmentResponse";
import AppointmentUserRequest from "models/appointment/AppointmentUserRequest";

const baseUrl = apiEndpoints.appointment;
const baseAdminUrl = apiEndpoints.appointmentAdmin;

const AppointmentAPI = {
	//User endpoints
	findAllFilteredBy: (
		filter: AppointmentFilter
	): Promise<AppointmentResponse[]> =>
		axios.get(`${baseUrl}/filter`, {
			params: {
				status: filter.status,
			},
		}),
	userCreate: (request: AppointmentUserRequest): Promise<AppointmentResponse> =>
		axios.post(`${baseUrl}`, request),
	userUpdate: (
		id: number,
		request: AppointmentUserRequest
	): Promise<AppointmentResponse> => axios.put(`${baseUrl}/${id}`, request),

	//Admin/Doctor endpoints
	findAllFilteredByAdmin: (
		filter: AppointmentFilter
	): Promise<AppointmentResponse[]> =>
		axios.get(`${baseAdminUrl}/filter`, {
			params: {
				status: filter.status,
			},
		}),
	doctorCreate: (
		request: AppointmentDoctorRequest
	): Promise<AppointmentResponse> => axios.post(`${baseAdminUrl}`, request),
	doctorUpdate: (
		id: number,
		request: AppointmentDoctorRequest
	): Promise<AppointmentResponse> =>
		axios.put(`${baseAdminUrl}/${id}`, request),
};

export default AppointmentAPI;
