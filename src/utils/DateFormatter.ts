import { format } from "date-fns";
import moment from "moment";
import { customParseInt } from "./GeneralUtils";

const DateFormatter = {
	messageTimestamp: (timestamp: Date) => {
		try {
			let timestampToDate = new Date(timestamp);
			let hours =
				timestampToDate.getHours() - timestampToDate.getTimezoneOffset() / 60;

			return format(timestampToDate.setHours(hours), "yyyy-MM-dd HH:mm");
		} catch (error) {
			return "";
		}
	},
	dateTimestamp: (timestamp: Date, standard?: boolean): string => {
		try {
			const timestampToDate: Date = new Date(timestamp);
			const hours: number =
				timestampToDate.getHours() - timestampToDate.getTimezoneOffset() / 60;

			if (standard) {
				return format(timestampToDate.setHours(hours), "yyyy-MM-dd HH:mm:ss");
			}
			return format(timestampToDate.setHours(hours), "yyyy-MM-dd");
		} catch (error) {
			return "";
		}
	},
	dateStringToTimestamp: (timestamp: string): string => {
		return format(new Date(timestamp), "yyyy-MM-dd HH:mm:ss");
	},
	getYearAndMonth: (date: Date): string => {
		try {
			return format(date, "yyyy-MM");
		} catch (e) {
			return "";
		}
	},
	getDuration: (from: Date, to: Date): number => {
		const result = moment(to).diff(moment(from), "days");
		return customParseInt(result);
	},
	getDurationText: (daysBetween: number) => {
		if (daysBetween > 9 && daysBetween < 21) {
			return `${daysBetween} nakvynių`;
		} else if (daysBetween % 10 === 1) {
			return daysBetween + " nakvynė";
		} else if (daysBetween % 10 === 0) {
			return daysBetween + " nakvynių";
		} else return daysBetween + " nakvynės";
	},
	counteractTimezoneOffset: (date: Date) => {
		return new Date(
			(date as Date).getFullYear(),
			(date as Date).getMonth(),
			(date as Date).getDate(),
			(date as Date).getHours() - (date as Date).getTimezoneOffset() / 60
		);
	},
};

export default DateFormatter;
