import { Dialog } from "@mui/material";
import AuthAPI from "api/AuthAPI";
import FormTextField from "components/form/FormTextField";
import ReadableHiddenPasswordField from "components/form/ReadableHiddenPasswordField";
import { Form, Formik, FormikProps } from "formik";
import * as yup from "yup";

interface RegisterDialogProps {
	open: boolean;
	handleClose: () => void;
}

const RegisterDialog = (props: RegisterDialogProps) => {
	const handleSubmit = async (values: RegistrationValues) => {
		console.log("values", values);
		let response = await AuthAPI.register(values);
		console.log("AuthPAI response", response);
	};
	return (
		<Dialog
			open={true}
			onClose={() => {}}
			PaperProps={{
				style: {
					backgroundColor: "transparent",
					boxSizing: "border-box",
					padding: "16px",
					boxShadow: "none",
				},
			}}
		>
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{(formik: FormikProps<RegistrationValues>) => (
				<Form className="register-dialog-container">
					<div className="input-container">
						<FormTextField
							name="name"
							label="Name"
							value={formik.values.name}
						/>
						<FormTextField
							name="lastname"
							label="Lastname"
							value={formik.values.lastname}
						/>

						<FormTextField
							name="email"
							label="Email"
							value={formik.values.email}
						/>

						<ReadableHiddenPasswordField
							name="password"
							label="Password"
							value={formik.values.password}
							variant="outlined"
						/>
					</div>
				</Form>
			)}
		</Formik>
		</Dialog>
	);
};

interface RegistrationValues {
	name: string;
	lastname: string;
	email: string;
	password: string;
	personalCode: string;
	phoneNumber: string;
	address: string;
}

const initialValues: RegistrationValues = {
	name: "",
	lastname: "",
	email: "",
	password: "",
	personalCode: "",
	phoneNumber: "",
	address: "",
};

const validationSchema = yup.object({
	name: yup.string().required("Name is required"),
	lastname: yup.string().required("Lastname is required"),
	email: yup.string().email("Invalid email").required("Email is required"),
	password: yup.string().required("Password is required"),
	personalCode: yup.string().required("Personal code is required"),
	phoneNumber: yup.string().required("Phone number is required"),
	address: yup.string().required("Address is required"),
});



export default RegisterDialog;
