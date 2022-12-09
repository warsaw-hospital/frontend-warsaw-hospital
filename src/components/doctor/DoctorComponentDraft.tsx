import { Avatar, Box, Divider, Typography } from "@mui/material";
import * as React from "react";

interface DoctorProfileProps {
	name: string;
	specialty: string;
	yearsOfExperience: number;
	address: string;
	phoneNumber: string;
	imageUrl: string;
}

const DoctorProfile: React.FC<DoctorProfileProps> = (
	props: DoctorProfileProps
) => {
	return (
		<Box
			style={{
				display: "flex",
				alignItems: "center",
			}}
		>
			<Avatar
				src={props.imageUrl}
				alt={props.name}
				style={{ marginRight: "20px" }}
			/>
			<Box>
				<Typography variant="h5">{props.name}</Typography>
				<Typography variant="body2">Specialty: {props.specialty}</Typography>
				<Typography variant="body2">
					Years of experience: {props.yearsOfExperience}
				</Typography>
				<Typography variant="body2">Address: {props.address}</Typography>
				<Typography variant="body2">
					Phone number: {props.phoneNumber}
				</Typography>
			</Box>
			<Divider />
		</Box>
	);
};

export default DoctorProfile;
