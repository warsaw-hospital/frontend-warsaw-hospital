import { Box, Button, Divider, Typography } from "@mui/material";
import DoctorAPI from "api/DoctorAPI";
import DoctorResponse from "models/doctor/DoctorResponse";
import { useEffect, useState } from "react";
import "./DoctorComponents.css";

interface DoctorInfoComponentProps {
	doctor: DoctorResponse;
}

const DoctorInfoComponent = (props: DoctorInfoComponentProps) => {
	const { doctor } = props;

	return (
		<div className="doctor-component-container">
			<div className="doctor-icon-container">
				<Box
					style={{
						width: "100%",
						borderRadius: "5px 5px 0px 0px",
					}}
					component="img"
					src="static/images/doctor/doctor_1.jpg"
				/>
			</div>
			<Divider
				style={{
					width: "100%",
					margin: "16px 0px",
				}}
			/>
			<div className="doctor-name-and-specialty-container">
				<Typography variant="h4">{doctor.name}</Typography>
				<Typography variant="body2">
					{doctor.specializations
						.map((specialization) => specialization.name)
						.join(", ")}
				</Typography>
			</div>
			<div className="button-container">
				<Button
					variant="contained"
					color="primary"
					style={{
						width: "100%",
						textTransform: "none",
						flex: 1,
						padding: "8px",
						minWidth: "fit-content",
					}}
				>
					<Typography variant="button" color="white">
						View Profile
					</Typography>
				</Button>
			</div>
		</div>
	);
};

export default DoctorInfoComponent;
