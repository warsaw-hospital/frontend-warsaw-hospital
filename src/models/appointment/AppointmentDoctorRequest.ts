interface AppointmentDoctorRequest {
    id?: number;
    description: string;
    appointmentDate: Date;
    startTime: string;
    endTime: string;
    createdAt: Date;
    userId: number;
}

export default AppointmentDoctorRequest;