import DoctorAPI from "api/DoctorAPI";
import DoctorInfoComponent from "components/doctor/DoctorInfoComponent";
import DoctorResponse from "models/doctor/DoctorResponse";
import { useEffect, useState } from "react";

const DoctorListPage = () => {
	const [doctors, setDoctors] = useState<DoctorResponse[]>();
	useEffect(() => {
		console.log("DoctorListPage");
		getDoctors();
	}, []);

	const getDoctors = async () => {
		let response = await DoctorAPI.findAllFilteredBy();
		setDoctors(response);
		console.log("doctors: ", response);
	};

	return (
		<div>
			{doctors?.map((doctor) => (
				<DoctorInfoComponent key={doctor.id} doctor={doctor} />
			))}
		</div>
	);
};

export default DoctorListPage;
