import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import {
	Box,
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	Divider,
	IconButton,
	InputAdornment,
	Link,
	List,
	Slide,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { TransitionProps } from "@mui/material/transitions";
import SearchResultItem, {
	SearchResultItemValue,
} from "components/search/SearchResultItem";
import { ChangeEvent, forwardRef, ReactElement, Ref, useState } from "react";

const HeaderSearch = () => {
	const [openSearchResults, setOpenSearchResults] = useState(false);
	const [searchValue, setSearchValue] = useState("");

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setSearchValue(event.target.value);

		if (event.target.value) {
			if (!openSearchResults) {
				setOpenSearchResults(true);
			}
		} else {
			setOpenSearchResults(false);
		}
	};

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Tooltip arrow title="Search">
				<IconButton color="primary" onClick={handleClickOpen}>
					<SearchTwoToneIcon />
				</IconButton>
			</Tooltip>

			<DialogWrapper
				open={open}
				TransitionComponent={Transition}
				keepMounted
				maxWidth="md"
				fullWidth
				scroll="paper"
				onClose={handleClose}
			>
				<DialogTitleWrapper>
					<SearchInputWrapper
						value={searchValue}
						autoFocus={true}
						onChange={handleSearchChange}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchTwoToneIcon />
								</InputAdornment>
							),
						}}
						placeholder="Search terms here..."
						fullWidth
						label="Search"
					/>
				</DialogTitleWrapper>
				<Divider />

				{openSearchResults && (
					<DialogContent>
						<Box
							sx={{ pt: 0, pb: 1 }}
							display="flex"
							justifyContent="space-between"
						>
							<Typography variant="body2" component="span">
								Search results for{" "}
								<Typography
									sx={{ fontWeight: "bold" }}
									variant="body1"
									component="span"
								>
									{searchValue}
								</Typography>
							</Typography>
							<Link href="#" variant="body2" underline="hover"></Link>
						</Box>
						<Divider sx={{ my: 1 }} />
						<List disablePadding>
							{dummySearchValues.map((item, index) => (
								<>
									<SearchResultItem
										title={item.title}
										description={item.description}
										path={item.link}
									/>
									<Divider sx={{ mt: 1, mb: 1 }} />
								</>
							))}
						</List>

						<Box sx={{ textAlign: "center" }}>
							<Button color="primary">View all search results</Button>
						</Box>
					</DialogContent>
				)}
			</DialogWrapper>
		</>
	);
};

const dummySearchValues: SearchResultItemValue[] = [
	{
		title: "Dr. Doctor 1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		link: "/",
	},
	{
		title: "Dr. Doctor 2",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		link: "/",
	},
	{
		title: "Dr. Doctor 3",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		link: "/",
	},
];

const Transition = forwardRef(function Transition(
	props: TransitionProps & { children: ReactElement<any, any> },
	ref: Ref<unknown>
) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const DialogWrapper = styled(Dialog)(
	() => `
    .MuiDialog-container {
        height: auto;
    }
    
    .MuiDialog-paperScrollPaper {
        max-height: calc(100vh - 64px)
    }
`
);

const SearchInputWrapper = styled(TextField)(
	({ theme }) => `
    background: ${theme.colors.alpha.white[100]};

    .MuiInputBase-input {
        font-size: ${theme.typography.pxToRem(17)};
    }
`
);

const DialogTitleWrapper = styled(DialogTitle)(
	({ theme }) => `
    background: ${theme.colors.alpha.black[5]};
    padding: ${theme.spacing(3)}
`
);

export default HeaderSearch;
