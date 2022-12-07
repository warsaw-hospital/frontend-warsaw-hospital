import { Typography } from "@mui/material";
import "./LoginDialogStyle.css";
import LoginThroughPasswordForm from "./LoginThroughPasswordForm";

interface Props {
	goToPasswordRemind: () => void;
}

function LoginThroughPassword(props: Props) {
	return (
		<div className="login-body">
			<Typography variant="h2" className="login-title">
				Prisijungti per
			</Typography>
			<LoginThroughPasswordForm />
		</div>
	);
}

export default LoginThroughPassword;
