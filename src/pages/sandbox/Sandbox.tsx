import { Typography } from "@mui/material";
import LoginYT from "components/login/LoginYT";

const Sandbox = () => {
	const handleChange = () => {
		console.log("handleChange");
	};
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				height: "100%",
				gap: "8px",
			}}
		>
			<Typography
				variant="h1"
				style={{
					width: "100%",
				}}
			>
				Sandbox
			</Typography>

			<LoginYT handleChange={handleChange} />
		</div>
	);
};

export default Sandbox;
