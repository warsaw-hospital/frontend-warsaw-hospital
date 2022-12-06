import axios from "axios";
import apiEndpoints from "constants/apiEndpoints";
import WorkDayRequest from "models/workschedule/WorkDayRequest";
import WorkDayResponse from "models/workschedule/WorkDayResponse";
import WorkScheduleRequest from "models/workschedule/WorkScheduleRequest";
import WorkScheduleTemplateResponse from "models/workschedule/WorkScheduleTemplateResponse";

const baseUrl = apiEndpoints.workSchedule;
const baseAdminUrl = apiEndpoints.workScheduleAdmin;

const WorkScheduleAPI = {
	//User endpoints
	findAllWorkDaysByDoctorId: (doctorId: number): Promise<WorkDayResponse[]> =>
		axios.get(`${baseUrl}//work-day/doctor/${doctorId}`),
	findWorkDayById: (workDayId: number): Promise<WorkDayResponse> =>
		axios.get(`${baseUrl}/work-day/${workDayId}`),

	//Admin/Doctor endpoints
	findAllDoctorTemplates: (): Promise<WorkScheduleTemplateResponse> =>
		axios.get(`${baseAdminUrl}/template`),
	findWorkScheduleTemplateById: (
		templateId: number
	): Promise<WorkScheduleTemplateResponse> =>
		axios.get(`${baseAdminUrl}/template/${templateId}`),
	createTemplate: (
		request: WorkScheduleRequest
	): Promise<WorkScheduleTemplateResponse> =>
		axios.post(`${baseAdminUrl}/template`, request),
	updateTemplate: (
		templateId: number,
		request: WorkScheduleRequest
	): Promise<WorkScheduleTemplateResponse> =>
		axios.put(`${baseAdminUrl}/template/${templateId}`, request),
	findAllDoctorWorkDays: (): Promise<WorkDayResponse[]> =>
		axios.get(`${baseAdminUrl}/work-day`),
	updateWorkDay: (
		workDayId: number,
		request: WorkDayRequest
	): Promise<WorkDayResponse> =>
		axios.put(`${baseAdminUrl}/work-day/${workDayId}`, request),
};

export default WorkScheduleAPI;
