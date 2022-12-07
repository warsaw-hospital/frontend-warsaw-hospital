import { isValid, parse } from "date-fns";
import { NavigateFunction } from "react-router-dom";

// import alerts from "redux/alerts";
import { lt } from "date-fns/locale";
import UserRoleResponse from "models/user/UserRoleResponse";

const goTo = (path: string, navigate: NavigateFunction) => {
	const currentPath: string = window.location.pathname;
	if (path === currentPath) {
		window.scrollTo(0, 0);
		// Needed for login
		window.location.assign(path);
	} else {
		window.scrollTo(0, 0);
		navigate(path, { state: { previousPath: currentPath } });
	}
};

const downloadBlob = (blob: Blob, fileName: string) => {
	const url = window.URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = fileName;
	a.click();
};

const printBlob = (blob: Blob) => {
	const url = window.URL.createObjectURL(blob);
	const iframe = document.createElement("iframe");
	document.body.appendChild(iframe);
	iframe.style.display = "none";
	iframe.src = url;
	iframe.onload = () => {
		setTimeout(() => {
			iframe.focus();
			iframe.contentWindow?.print();
		}, 1);
	};
};

const getPagePaddingForNegativeMargin = (width: number) => {
	if (width < 800) {
		return "-20px";
	} else if (width < 1400) {
		return "-7vw";
	} else {
		return "-100px";
	}
};

const isMobileView = (width: number): boolean => {
	return width < 900;
};

export const customParseInt = (number: number | string | undefined): number => {
	if (number === undefined || number === "") {
		return 0;
	} else if (typeof number === "string") {
		return parseInt(number, 10);
	} else {
		return number;
	}
};

const isCorrectDate = (value: Date | string | undefined | null): boolean => {
	if (!value) {
		// null or undefined is not correct date
		return false;
	}

	if (typeof value === "string") {
		// string will be parsed by yyyy-MM-dd formatting
		const parsedDate = parse(value, "yyyy-MM-dd", new Date(), { locale: lt });
		return isValid(parsedDate);
	}

	return !isNaN(value.getTime());
};

const isCorrectNumber = (maybeNumber: any): boolean => {
	// null, undefined are not correct values. Zero can be a valid value.
	if (!maybeNumber && maybeNumber !== 0) {
		return false;
	}

	// Check if given maybeNumber is made of only digits.
	// It also removes decimal point, so only integers pass this test.
	const strValue = `${maybeNumber}`;
	return /^\d+$/.test(strValue);
};

const isCorrectString = (strValue?: string): boolean => {
	if (!strValue) {
		return false;
	}
	return strValue.trim().length !== 0 && strValue !== "";
};

const isCorrectStringFromList = (items: string[], strValue?: string) => {
	if (!isCorrectString(strValue)) {
		return false;
	}
	return items.indexOf(strValue ?? "") !== -1;
};

const searchInArray = (array: any[], searchPredicate: string) => {
	return array.filter((item: any) =>
		(Object.values(item) as any[])
			.reduce((prev: any, current: any) => {
				if (typeof current == "string") return prev + current;
				if (typeof current == "object" && current) {
					return (
						prev + Object.values(current).reduce((p: any, c: any) => p + c, "")
					);
				}
				return prev + current;
			}, "")
			.toLowerCase()
			.includes(searchPredicate)
	);
};

const hasRole = (roles: UserRoleResponse[], roleName: string): boolean => {
	return roles.map((role) => role.name).includes(roleName);
};

export {
	goTo,
	downloadBlob,
	printBlob,
	getPagePaddingForNegativeMargin,
	isMobileView,
	isCorrectDate,
	isCorrectNumber,
	isCorrectString,
	isCorrectStringFromList,
	searchInArray,
	hasRole,
};
