import DoctorInfoComponent from "components/doctor/DoctorInfoComponent";
import "./DoctorInfoPage.css";

const DoctorInfoPage = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "flex-start",
				width: "100%",
			}}
		>
			<DoctorInfoComponent />
		</div>
	);
};

export default DoctorInfoPage;
