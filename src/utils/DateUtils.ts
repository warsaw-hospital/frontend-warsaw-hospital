const DateUtil = {
	isTimeFormatValid: (time: string) => {
		let timeRegex = new RegExp(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/);
		return timeRegex.test(time);
	},
	formatDateToTime: (date: Date) => {
		let timeRegex = new RegExp(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/);
		let newDate = `${date.getHours()}:${date.getMinutes()}`;
		if (timeRegex.test(date.toString())) {
			return newDate;
		}
		return null;
	},
};

export default DateUtil;
