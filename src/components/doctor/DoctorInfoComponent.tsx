import { Avatar, Button, Divider, Typography } from "@mui/material";
import "./DoctorComponents.css";

interface DoctorInfoComponentProps {}

const DoctorInfoComponent = (props: DoctorInfoComponentProps) => {
	let array = [1, 2, 3, 4, 5];
	array.forEach((element) => console.log(element));

	return (
		<div className="doctor-component-container">
			<div className="doctor-icon-container">
				<Avatar
					style={{
						width: "100px",
						height: "100px",
					}}
				/>
			</div>
			<div className="doctor-name-and-specialty-container">
				<Typography variant="h4">Dr. John Doe</Typography>
				<Typography variant="body1">Specialty: General Practitioner</Typography>
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
					}}
				>
					<Typography variant="body2" color="white">
						Register
					</Typography>
				</Button>
				<Button
					variant="contained"
					color="primary"
					style={{
						width: "100%",
						textTransform: "none",
						flex: 1,
						padding: "8px",
					}}
				>
					<Typography variant="body2" color="white">
						View Profile
					</Typography>
				</Button>
			</div>
			<Divider
				style={{
					width: "100%",
					margin: "32px 0px",
				}}
			/>
			<div className="doctor-info-container"></div>
		</div>
	);
};

export default DoctorInfoComponent;
