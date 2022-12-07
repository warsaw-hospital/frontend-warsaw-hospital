import { useFormikContext } from "formik";
import React from "react";

export default function AutoSubmitToken() {
	const { isValid, submitForm, values } = useFormikContext();
	React.useEffect(() => {
		if (isValid) {
			setTimeout(() => {
				submitForm();
			});
		}
	}, [isValid, submitForm, values]);
	return null;
}
