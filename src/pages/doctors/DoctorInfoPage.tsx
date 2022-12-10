import { Typography } from "@mui/material";
import DoctorAPI from "api/DoctorAPI";
import DoctorInfoComponent from "components/doctor/DoctorInfoComponent";
import DoctorResponse from "models/doctor/DoctorResponse";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./DoctorInfoPage.css";

const DoctorInfoPage = () => {
	let { id } = useParams();
	let doctorId = Number(id) || 0;

	const [doctor, setDoctor] = useState<DoctorResponse | undefined>();

	useEffect(() => {
		getDoctor();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getDoctor = async () => {
		let response = await DoctorAPI.findById(doctorId);
		setDoctor(response);
	};
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "flex-start",
				width: "100%",
			}}
		>
			<Typography>Docto Info pager</Typography>
			{doctor && <DoctorInfoComponent doctor={doctor} />}
		</div>
	);
};

export default DoctorInfoPage;
