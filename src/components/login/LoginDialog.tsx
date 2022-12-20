import { ArrowBackIosNew } from "@mui/icons-material";
import { Button, Dialog, Typography } from "@mui/material";
import { useRef } from "react";
import "./Login.css";
import LoginThroughPasswordForm from "./LoginThroughPasswordForm";

interface LoginDialogProps {
	open: boolean;
	isDoctorLogin?: boolean;
	handleClose: () => void;
	handleRegisterOpen: () => void;
	handleRegisterClose: () => void;
}

const LoginDialog = (props: LoginDialogProps) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	return (
		<Dialog fullWidth open={props.open} onClose={() => {}}>
			<div ref={wrapperRef} className={"login-main-component"}>
				<div
					className={"login-header-buttons"}
					style={{
						backgroundColor: "#F5F5F5",
					}}
				>
					<Button className="button" onClick={props.handleClose}>
						<ArrowBackIosNew
							style={{
								height: "16px",
								width: "16px",
								marginRight: "4px",
							}}
						/>
						<Typography variant="h5" className="login-header-return-button">
							Back
						</Typography>
					</Button>
					<Typography
						variant="body1"
						className="login-header-return-button"
						style={{
							fontStyle: "italic",
							marginRight: "24px",
						}}
					>
						Logging in
					</Typography>
				</div>

				<div
					style={{
						padding: "24px",
					}}
				>
					<LoginThroughPasswordForm isDoctorLogin={props.isDoctorLogin} handleClose={props.handleClose} />
				</div>
				<div
					style={{
						padding: "8px",
						paddingBottom: "24px",
					}}
				>
					<Typography variant="body2" color="text.secondary" align="center">
						Not a member of the community?{" "}
					</Typography>
					<Typography
						onClick={() => {
							props.handleRegisterOpen();

							props.handleClose();
						}}
						variant="body1"
						color="hyperlink"
						align="center"
						style={{
							marginTop: "8px",
							textDecoration: "underline",
							fontWeight: "bold",
							cursor: "pointer",
						}}
					>
						Register
					</Typography>
				</div>
			</div>
		</Dialog>
	);
};

export default LoginDialog;
