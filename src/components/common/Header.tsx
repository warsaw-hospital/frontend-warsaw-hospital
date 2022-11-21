import { Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import "./Common.css";

const Header = () => {
	return (
		<AppBar
			position='static'
			sx={{
				display: { md: "block", xs: "none" },
			}}>
			<Toolbar
				disableGutters
				style={{
					display: "flex",
					justifyContent: "space-between",
					gap: "10px",
				}}
				sx={{
					padding: "0px 32px",
				}}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-end",
						width: "100%",
					}}
				/>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: "100%",
					}}>
					<Typography variant='h6'>Header</Typography>
				</div>
			</Toolbar>
		</AppBar>
	);
};
export default Header;
