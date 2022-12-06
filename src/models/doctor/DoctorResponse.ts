import SpecializationResponse from "models/specialization/SpecializationResponse";

interface DoctorResponse {
	id: number;
	name: string;
	lastname: string;
	email: string;
	phoneNumber: string;
	description: string;
	specializations: SpecializationResponse[];
}

export default DoctorResponse;
