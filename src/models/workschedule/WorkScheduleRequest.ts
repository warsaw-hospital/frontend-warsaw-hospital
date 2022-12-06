interface WorkScheduleRequest {
	id?: number;
	dayOfWeek: DayOfWeek;
	startHour: string;
	endHour: string;
	isDayOff: boolean;
}

export enum DayOfWeek {
	MONDAY = "MONDAY",
	TUESDAY = "TUESDAY",
	WEDNESDAY = "WEDNESDAY",
	THURSDAY = "THURSDAY",
	FRIDAY = "FRIDAY",
	SATURDAY = "SATURDAY",
	SUNDAY = "SUNDAY",
}

export default WorkScheduleRequest;
