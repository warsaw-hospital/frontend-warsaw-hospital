import React from "react";
import { Button } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import "./button.css";

interface CreationButtonProps {
	leftIcon?: JSX.Element;
	label: string;
	onClick: () => void;
}

const CreationButton = (props: CreationButtonProps) => {
	return (
		<div className={"creation-button-container"}>
			<Button
				className={"creation-button"}
				onClick={() => props.onClick()}
				fullWidth
				style={{
					textTransform: "none",
				}}
			>
				<div className={"title-icon"}>
					{props?.leftIcon !== undefined ? (
						props.leftIcon
					) : (
						<AddCircleRoundedIcon />
					)}
				</div>
				{props.label}
			</Button>
		</div>
	);
};

export default CreationButton;
