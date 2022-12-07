import { ArrowBackIosNew } from "@mui/icons-material";
import { Button, Dialog, Typography } from "@mui/material";
import AppTheme from "theme/AppTheme";
import { useRef } from "react";
import LoginThroughPasswordForm from "./LoginThroughPasswordForm";

interface LoginDialogProps {
	open: boolean;
	handleClose: () => void;
}

const LoginDialog = (props: LoginDialogProps) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	return (
		<Dialog fullWidth open={true} onClose={() => {}}>
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
							}}
						/>
						<Typography variant="h5" className={"login-header-return-button"}>
							Back
						</Typography>
					</Button>

					<div className="login-close-text">
						<Button className="button" onClick={() => props.handleClose()}>
							<Typography variant="h5" color={AppTheme.palette.text.primary}>
								Close
							</Typography>
						</Button>
					</div>
				</div>

				<div className={"login-body"}>
					<Typography variant={"h2"} className={"login-title"}>
						Prisijungti per
					</Typography>

					<LoginThroughPasswordForm />
				</div>
			</div>
		</Dialog>
	);
};

export default LoginDialog;
