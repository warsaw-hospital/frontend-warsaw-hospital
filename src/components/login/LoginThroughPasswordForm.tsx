import { Button, Divider, Typography } from "@mui/material";
import AuthAPI from "api/AuthAPI";
import { Formik, FormikProps } from "formik";
import { useEffect, useRef, useState } from "react";
import * as yup from "yup";

import LoginRequest from "models/auth/LoginRequest";
import FormTextField from "../form/FormTextField";
import ReadableHiddenPasswordField from "../form/ReadableHiddenPasswordField";
import "./LoginDialogStyle.css";

const LoginThroughPasswordForm = () => {
	const [loggedIn, setLoggedIn] = useState<boolean | undefined>(undefined);

	const handleSimpleLogin = async (request: LoginRequest) => {
		setLoggedIn(await AuthAPI.login(request));
	};

	useEffect(() => {
		if (loggedIn) {
			window.location.assign("/pagrindinis");
		}
	}, [loggedIn]); // eslint-disable-line react-hooks/exhaustive-deps

	const handleFormikSubmit = (values: any) => {
		handleSimpleLogin({
			password: values.password,
			email: values.email,
		});
	};

	const ref = useRef<HTMLInputElement>(null);

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleFormikSubmit}
		>
			{(formik: FormikProps<any>) => (
				<div className={"login-with-password-body"}>
					<Divider>arba </Divider>
					<FormTextField
						title={"El. paštas"}
						name={"email"}
						className={"login-input"}
						onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
							if (event.key === "Enter") {
								if (formik.isValid) {
									formik.submitForm();
								} else {
									ref.current?.focus();
								}
							}
						}}
					/>
					<ReadableHiddenPasswordField
						title={"Slaptažodis"}
						autoComplete={"current-password"}
						inputRef={ref}
						name={"password"}
						enableEnterSubmit={true}
						enterSubmitAction={() => formik.handleSubmit()}
						className={"login-input"}
					/>
					{loggedIn === false && (
						<label style={{ color: "red" }}>
							Login failed. Please check your credentials.
						</label>
					)}
					<Button
						fullWidth
						onClick={() => formik.handleSubmit()}
						type="submit"
						color={"primary"}
						variant={"contained"}
						disabled={!formik.isValid}
						style={{
							textTransform: "none",
							padding: "16px 40px",
						}}
					>
						<Typography variant="h5" color="#FFFFFF">
							Prisijungti
						</Typography>
					</Button>
				</div>
			)}
		</Formik>
	);
};

export default LoginThroughPasswordForm;

const initialValues = {
	email: "",
	password: "",
};

const validationSchema = yup.object({
	email: yup
		.string()
		.email("Elektroninis paštas turi būti teisingas.")
		.required("Elektroninis paštas yra privalomas."),
	password: yup.string().required("Slaptažodis yra privalomas"),
});
