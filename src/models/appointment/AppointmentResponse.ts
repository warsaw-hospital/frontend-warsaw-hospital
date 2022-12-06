import DoctorResponse from "models/doctor/DoctorResponse";
import FullUserInfo from "models/user/FullUserInfo";

interface AppointmentResponse {
	id: number;
	description: string;
	appointmentDate: Date;
	appointmentStartTime: string;
	appointmentEndTime: string;
	createdAt: Date;
	status: string;
	user: FullUserInfo;
	doctor: DoctorResponse;
}

export default AppointmentResponse;
