import { Box, Button, Divider, Typography } from "@mui/material";
import DoctorResponse from "models/doctor/DoctorResponse";
import { useNavigate } from "react-router";
import "./DoctorComponents.css";

interface DoctorInfoComponentProps {
	doctor: DoctorResponse;
}

const DoctorInfoComponent = (props: DoctorInfoComponentProps) => {
	const { doctor } = props;
	const imageSrc = imageSrcList[doctor.id % imageSrcList.length];
	const navigate = useNavigate();
	return (
		<div className="doctor-component-container">
			<div className="doctor-icon-container">
				<Box
					style={{
						borderRadius: "5px 5px 0px 0px",
						maxWidth: "300px",
						width: "250px",
					}}
					component="img"
					src={imageSrc}
				/>
			</div>
			<Divider
				style={{
					width: "100%",
					margin: "16px 0px 4px 0px",
				}}
			/>
			<div className="doctor-name-and-specialty-container">
				<Typography
					variant="h3"
					style={{
						paddingBottom: "8px",
					}}
				>
					{doctor.name}
				</Typography>
				<Typography variant="body2">
					{doctor.specializations
						.map((specialization) => specialization.name)
						.join(", ")}
				</Typography>
			</div>
			<div className="button-container">
				<Button
					onClick={() => {
						navigate(`/doctor/info/${doctor.id}`);
					}}
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

export const imageSrcList = [
	"/static/images/doctor/doctor_1.jpg",
	"/static/images/doctor/doctor_2.jpg",
	"/static/images/doctor/doctor_3.jpg",
	"/static/images/doctor/doctor_4.jpg",
	"/static/images/doctor/doctor_5.jpg",
];

export default DoctorInfoComponent;
