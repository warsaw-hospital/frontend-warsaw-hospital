import axios from "axios";
import apiEndpoints from "constants/apiEndpoints";
import DoctorFilter from "models/doctor/DoctorFilter";
import DoctorRequest from "models/doctor/DoctorRequest";
import DoctorResponse from "models/doctor/DoctorResponse";
import SpecializationResponse from "models/specialization/SpecializationResponse";

const baseUrl = apiEndpoints.doctor;
const baseAdminUrl = apiEndpoints.doctorAdmin;

const DoctorAPI = {
	//User endpoints
	findById: (id: number): Promise<DoctorResponse> =>
		axios.get(`${baseUrl}/${id}`),
	findAllFilteredBy: (filter?: DoctorFilter): Promise<DoctorResponse[]> =>
		axios.post(`${baseUrl}/filter`, {
			params: {
				search: filter?.search,
				specialization: filter?.specialization,
			},
		}),
	findAllSpecializations: (): Promise<SpecializationResponse[]> =>
		axios.get(`${baseUrl}/specializations`),

	//Admin/Doctor endpoints
	create: (request: DoctorRequest): Promise<DoctorResponse> =>
		axios.post(`${baseAdminUrl}`, request),
	update: (id: number, request: DoctorRequest): Promise<DoctorResponse> =>
		axios.put(`${baseAdminUrl}/${id}`, request),
	delete: (id: number): Promise<void> => axios.delete(`${baseAdminUrl}/${id}`),
};

export default DoctorAPI;
