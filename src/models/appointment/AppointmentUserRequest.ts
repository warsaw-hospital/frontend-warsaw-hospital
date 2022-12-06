interface AppointmentUserRequest {
	id?: number;
	description: string;
	appointmentDate: Date;
	startTime: string;
	endTime: string;
	createdAt: Date;
	doctorId: number;
}

export default AppointmentUserRequest;
