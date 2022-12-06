import { DayOfWeek } from "./WorkScheduleRequest";

interface WorkScheduleTemplateResponse {
	id: number;
	dayOfWeek: DayOfWeek;
	startHour: string;
	endHour: string;
	isDayOff: boolean;
}

export default WorkScheduleTemplateResponse;
