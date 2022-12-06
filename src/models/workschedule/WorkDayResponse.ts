interface WorkDayResponse {
	id: number;
	workDate: Date;
	startHour: string;
	endHour: string;
	isHoliday: boolean;
	isDayOff: boolean;
}

export default WorkDayResponse;
