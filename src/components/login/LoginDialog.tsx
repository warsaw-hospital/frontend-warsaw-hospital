import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import { useState } from "react";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";

import "./Login.css";
import { borderRadius } from "@mui/system";

interface LoginDialogProps {
	open: boolean;
	handleClose: () => void;
}

const LoginDialog = (props: LoginDialogProps) => {
	const [isSignup, setIsSignup] = useState(false);
	const [inputs, setInputs] = useState({
		name: "", // only used for signup
		surname: "", // only used for signup
		email: "",
		password: "",
	});
	const handleChange = (e) => {
		setInputs((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputs);
	};
	const resetState = () => {
		setIsSignup(!isSignup);
		setInputs({
			name: "",
			surname: "",
			email: "",
			password: "",
		});
	};

	return (
		<Dialog
			open={props.open}
			onClose={props.handleClose}
			style={{
				borderRadius: "5px",
			}}
		>
			<div className="dialogastemp">
				<form onSubmit={handleSubmit}>
					<Box
						display="flex"
						flexDirection={"column"}
						maxWidth={400}
						alignItems="center"
						justifyContent={"center"}
						margin={"auto"}
						// marginTop={5}
						padding={3}
						borderRadius={5}
						// boxShadow={"5px 5px 10px #ccc"}
						sx={{
							":hover": {
								boxShadow: "10px 10px 20px #ccc",
							},
						}}
					>
						<Typography variant="h2" padding={3} textAlign="center">
							{isSignup ? "Sign Up" : "Login"}
						</Typography>
						{isSignup && (
							<TextField
								onChange={handleChange}
								name="name"
								value={inputs.name}
								margin="normal"
								type="text"
								variant="outlined"
								placeholder="Name"
								required
							/>
						)}
						{isSignup && (
							<TextField
								onChange={handleChange}
								name="surname"
								value={inputs.surname}
								margin="normal"
								type="text"
								variant="outlined"
								placeholder="Surname"
								required
							/>
						)}
						<TextField
							onChange={handleChange}
							name="email"
							value={inputs.email}
							margin="normal"
							type="email"
							variant="outlined"
							placeholder="Email"
							required
						/>
						<TextField
							onChange={handleChange}
							name="password"
							value={inputs.password}
							margin="normal"
							type="password"
							variant="outlined"
							placeholder="Password"
							required
						/>
						<Button
							endIcon={
								isSignup ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />
							}
							type="submit"
							sx={{ marginTop: 3, borderRadius: 3 }}
							variant="contained"
							color="warning"
						>
							{isSignup ? "Sign Up" : "Login"}
						</Button>
						<Button
							endIcon={
								isSignup ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />
							}
							onClick={resetState}
							sx={{ marginTop: 3, borderRadius: 3 }}
						>
							Change to {isSignup ? "Login" : "Signup"}
						</Button>
					</Box>
				</form>
			</div>
		</Dialog>
	);
};

export default LoginDialog;
