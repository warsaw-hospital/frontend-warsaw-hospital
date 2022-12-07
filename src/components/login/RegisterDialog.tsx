import { Dialog } from "@mui/material";

interface RegisterDialogProps {
	open: boolean;
	handleClose: () => void;
}

const RegisterDialog = (props: RegisterDialogProps) => {
	return (
		<Dialog
			open={true}
			onClose={() => {}}
			PaperProps={{
				style: {
					backgroundColor: "transparent",
					boxSizing: "border-box",
					padding: "16px",
					boxShadow: "none",
				},
			}}
		>
			<div></div>
		</Dialog>
	);
};

export default RegisterDialog;
