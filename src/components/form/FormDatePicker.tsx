import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import {
	Box,
	OutlinedInputProps,
	PaperProps,
	PopperProps,
	TextField,
	Tooltip,
	Typography,
	TypographyProps,
} from "@mui/material";
import {
	DatePicker,
	LocalizationProvider,
	PickersDay,
	PickersDayProps,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import AppTheme from "AppTheme";
import InputClearButton from "components/button/InputClearButton";
import { lt } from "date-fns/locale";
import { FieldHookConfig, useField, useFormikContext } from "formik";
import { useState } from "react";
import DateFormatter from "utils/DateFormatter";

interface FormDatePickerProps extends OutlinedInputProps {
	title?: string;
	description?: string;
	titleprops?: TypographyProps;
	descriptionprops?: TypographyProps;
	errorprops?: TypographyProps;
	tooltip?: string;
	popupIcon?: React.ReactNode;
	InputProps?: OutlinedInputProps;
	pickMonth?: boolean;
	minDate?: any;
	maxDate?: any;
	PopperProps?: Partial<PopperProps> | undefined;
	PaperProps?: Partial<PaperProps<"div", {}>> | undefined;
	disabledDates?: string[];
	shouldDisableMonth?: (date: Date) => boolean;
	initialDateValue?: Date | null;
	renderEndClearButton?: boolean;
}

const FormDatePicker = (
	props: FormDatePickerProps & FieldHookConfig<string>
) => {
	const formikContext = useFormikContext();

	const [field, meta] = useField(props);
	const [value, setValue] = useState<Date | null | undefined>(
		props.initialDateValue
	);
	const [clearButtonOpacity, setClearButtonOpacity] = useState(0);

	const customDayRenderer = (
		date: Date,
		selectedDates: Array<Date | null>,
		pickersDayProps: PickersDayProps<Date>
	) => {
		if (
			props.disabledDates &&
			props.disabledDates.includes(DateFormatter.dateTimestamp(date))
		) {
			return <PickersDay {...pickersDayProps} disabled />;
		}
		return <PickersDay {...pickersDayProps} />;
	};

	const handleChange = (newValue: Date | null) => {
		const temp = newValue ? new Date(newValue) : new Date();

		newValue = DateFormatter.counteractTimezoneOffset(temp);

		setValue(newValue);
		formikContext.setFieldTouched(props.name, true);
		formikContext.setFieldValue(props.name, newValue);
		return newValue;
	};

	const handleClearValue = () => {
		handleChange(null);
	};

	return (
		<div className="textfield-container">
			{props.title && (
				<div className="textfield-title-container">
					<Typography
						color={AppTheme.palette.text.primary}
						variant="h5"
						{...props.titleprops}
					>
						{props.title}
					</Typography>
					{props.tooltip && (
						<Tooltip title={props.tooltip}>
							<HelpRoundedIcon className="textfield-tooltip" />
						</Tooltip>
					)}
				</div>
			)}
			<LocalizationProvider adapterLocale={lt} dateAdapter={AdapterDateFns}>
				<DatePicker
					value={
						value ? value : props.initialDateValue === null ? null : field.value
					}
					ignoreInvalidInputs
					onChange={handleChange}
					mask="____-__-__"
					inputFormat={props.pickMonth ? "yyyy-MM" : "yyyy-MM-dd"}
					InputProps={props.InputProps}
					views={props.pickMonth ? ["year", "month"] : undefined}
					minDate={props.minDate}
					maxDate={props.maxDate}
					shouldDisableMonth={props.shouldDisableMonth}
					disabled={props.disabled}
					PaperProps={props.PaperProps}
					PopperProps={props.PopperProps}
					renderDay={customDayRenderer}
					onError={() => (error: string) => {
						formikContext.setFieldError(props.name, error);
					}}
					renderInput={(params) => (
						<TextField
							{...params}
							{...field}
							onMouseEnter={() => {
								if (value) {
									setClearButtonOpacity(1);
								}
							}}
							onMouseLeave={() => setClearButtonOpacity(0)}
							InputProps={{
								...params.InputProps,
								...props.InputProps,
								endAdornment: params.InputProps?.endAdornment,
								startAdornment: props.renderEndClearButton ? (
									<InputClearButton
										opacity={clearButtonOpacity}
										handleClearValue={handleClearValue}
									/>
								) : (
									params.InputProps?.startAdornment
								),
								style: {
									display: "flex",
									flexDirection: "row-reverse",
									...props.InputProps?.style,
									paddingLeft: "0px",
								},
							}}
							error={meta.touched && Boolean(meta.error)}
						/>
					)}
				/>
			</LocalizationProvider>
			{meta.touched && Boolean(meta.error) && (
				<Box className="textfield-error-container">
					<ErrorRoundedIcon className="textfield-error-icon" />

					<Typography
						variant="subtitle"
						color={AppTheme.palette.red[800]}
						align="left"
						{...props.errorprops}
					>
						{meta.error}
					</Typography>
				</Box>
			)}
			{props.description && (
				<Typography
					variant="subtitle"
					align="left"
					color={AppTheme.palette.grey[700]}
					{...props.descriptionprops}
				>
					{props.description}
				</Typography>
			)}
		</div>
	);
};

FormDatePicker.defaultProps = {
	renderEndClearButton: true,
};

export default FormDatePicker;
