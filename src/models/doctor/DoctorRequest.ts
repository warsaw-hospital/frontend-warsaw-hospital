interface DoctorRequest {
	id?: number;
	name: string;
	lastname: string;
	email: string;
	password: string;
	personalCode: string;
	phoneNumber: string;
	address: string;
	description: string;
	specializationIds: number[];
}

export default DoctorRequest;
