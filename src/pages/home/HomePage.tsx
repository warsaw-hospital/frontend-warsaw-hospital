import { Typography } from "@mui/material";
import "./HomePage.css";

const HomePage = () => {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
			}}>
			<Typography variant='h1'>Home Page</Typography>
		</div>
	);
};

export default HomePage;
