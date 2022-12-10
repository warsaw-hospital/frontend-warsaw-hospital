import { ReactComponent as LeftTreeHomePage } from "assets/svg/left-tree-home-page.svg";
import { ReactComponent as RightTreeHomePage } from "assets/svg/right-tree-home-page.svg";

import "./HomePage.css";
import { Email } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

const HomePage = () => {
	return (
		<div
			style={{
				display: "flex",

				justifyContent: "space-between",
				alignItems: "center",
				marginTop: "48px",
				// marginLeft: "-305px",
				minWidth: "100%",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flex: 1,
				}}
			>
				<LeftTreeHomePage
					style={{
						width: "100%",
						height: "auto",
						minWidth: "190px",
						maxWidth: "300px",
					}}
				/>
			</div>

			<div
				className={"homepage-upper-section-middle"}
				style={{
					marginLeft: "1rem",
					width: "100%",
					marginRight: "1rem",
				}}
			>
				<div
					style={{
						padding: "12px 24px",
						width: "100%",
					}}
				>
					<Typography variant={"h3"}>
						We welcome you to the new and improved version of the warsaw
						hospital website. We hope you will find it easier to navigate and
						more user-friendly. If you have any questions...
					</Typography>
				</div>
				<div
					className={"homepage-upper-section-buttons"}
					style={{
						flexDirection: "row",
						width: "100%",
					}}
				></div>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row-reverse",
					flex: 1,
				}}
			>
				<RightTreeHomePage
					style={{
						width: "100%",
						height: "auto",
						minWidth: "190px",
						maxWidth: "300px",
					}}
				/>
			</div>
		</div>
	);
};

export default HomePage;
