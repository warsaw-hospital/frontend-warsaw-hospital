import { Typography } from "@mui/material";

const Sandbox = () => {
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
			<Typography variant="h1"
			style={{
				width: "100%",
			}}
			>Sandbox</Typography>
		</div>
	);
};

export default Sandbox;
