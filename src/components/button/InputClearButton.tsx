import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "./button.css";

interface InputClearButtonProps {
	opacity: number;
	handleClearValue: () => void;
}

const InputClearButton = (props: InputClearButtonProps) => {
	const { opacity, handleClearValue } = props;
	return (
		<IconButton
			className="clear-button"
			style={{
				opacity: opacity,
			}}
			onClick={handleClearValue}
		>
			<Close
				style={{
					height: "20px",
					width: "20px",
				}}
			/>
		</IconButton>
	);
};

export default InputClearButton;
