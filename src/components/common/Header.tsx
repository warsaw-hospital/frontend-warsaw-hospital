import { Button, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import PersonIcon from '@mui/icons-material/Person';
import "./Common.css";
import LoginDialog from "components/login/LoginDialog";
import { useState } from "react";

const Header = () => {
	const [open, setOpen] = useState<boolean>(false);
	const handleOpen = () => setOpen(true);	
	const handleClose = () => setOpen(false);
	return (
		<AppBar
			position="static"
			sx={{
				display: { md: "block", xs: "none" },
			}}
		>
			<Toolbar
				disableGutters
				style={{
					display: "flex",
					justifyContent: "space-between",
					gap: "10px",
				}}
				sx={{
					padding: "0px 32px",
				}}
			>
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
					}}
				>
					<Typography variant="h6">Header</Typography>
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-start",
						width: "100%",
					}}
				>	
					<Button variant="contained" color="primary" startIcon={<PersonIcon />}
					onClick={handleOpen}
					style={{
						marginLeft: "auto",
						marginRight: "0px",
					}}
					>
						<Typography variant="body">Prisijungti</Typography>
					</Button>
				</div>
			</Toolbar>
			<LoginDialog open={open} handleClose={handleClose}/>
		</AppBar>
	);
};
export default Header;
