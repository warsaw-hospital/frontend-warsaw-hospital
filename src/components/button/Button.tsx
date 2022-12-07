import {
	Button,
	Typography,
	ButtonProps,
	TypographyProps,
} from "@mui/material";

interface Props extends ButtonProps {
	Icon?: () => JSX.Element;
	text: string;
	isNotMobileView?: boolean;
	buttonStyle?: React.CSSProperties;
	pictureClassName?: string;
	textProps?: TypographyProps;
}

const CustomButton = (props: Props) => {
	const {
		Icon,
		text,
		isNotMobileView = false,
		buttonStyle,
		pictureClassName,
		textProps,
		...other
	} = props;

	const getButtonHeight = () => (isNotMobileView ? undefined : "64px");

	return (
		<Button
			variant={"contained"}
			color={"primary"}
			size={"large"}
			style={{
				gap: "8px",
				height: getButtonHeight(),
				fontSize: "18px",
				width: "100%",
				textTransform: "none",
				...buttonStyle,
			}}
			fullWidth
			{...other}
		>
			<div className={pictureClassName} style={{ display: "flex" }}>
				{Icon ? <Icon /> : null}
			</div>
			<Typography variant="h5" color="#FFFFFF" {...textProps}>
				{text}
			</Typography>
		</Button>
	);
};

export default CustomButton;
