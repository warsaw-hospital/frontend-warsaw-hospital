import { Button, Typography } from "@mui/material";
import AuthAPI from "api/AuthAPI";
import { Formik, FormikProps } from "formik";
import LoginRequest from "models/auth/LoginRequest";
import { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import FormTextField from "../form/FormTextField";
import ReadableHiddenPasswordField from "../form/ReadableHiddenPasswordField";
import "./Login.css";

const LoginThroughPasswordForm = (props: { isDoctorLogin?: boolean }) => {
	const { isDoctorLogin } = props;
	const [loggedIn, setLoggedIn] = useState<boolean | undefined>(undefined);

	const handleSimpleLogin = async (request: LoginRequest) => {
		let response = await AuthAPI.login(request);
		setLoggedIn(response);
	};

	const handleDoctorLogin = async (request: LoginRequest) => {
		let response = await AuthAPI.doctorLogin(request);
		setLoggedIn(response);
	};

	useEffect(() => {
		if (loggedIn) {
			// window.location.assign("/sandbox");
		}
	}, [loggedIn]); // eslint-disable-line react-hooks/exhaustive-deps

	const handleFormikSubmit = (values: any) => {
		console.log("values", values);
		console.log("isDoctorLogin", isDoctorLogin);
		if (isDoctorLogin) {
			handleDoctorLogin({
				password: values.password,
				email: values.email,
			});
		} else {
			handleSimpleLogin({
				password: values.password,
				email: values.email,
			});
		}
	};

	const ref = useRef<HTMLInputElement>(null);

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleFormikSubmit}
		>
			{(formik: FormikProps<any>) => (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "16px",
					}}
				>
					<FormTextField
						title={"Email"}
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
						title="Password"
						autoComplete="current-password"
						inputRef={ref}
						name="password"
						enableEnterSubmit={true}
						variant="outlined"
						enterSubmitAction={() => formik.handleSubmit()}
						className={"login-input"}
						style={{
							marginBottom: "32px",
						}}
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
						color="primary"
						variant="contained"
						disabled={!formik.isValid || formik.isSubmitting}
						style={{
							textTransform: "none",
							padding: "16px 40px",
						}}
					>
						<Typography variant="h5" color="#FFFFFF">
							Log in
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
	email: yup.string().email("Wrong email format").required("Email is required"),
	password: yup.string().required("Password is required"),
});
