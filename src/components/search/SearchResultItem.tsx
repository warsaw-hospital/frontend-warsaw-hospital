import { ChevronRightTwoTone, FindInPageTwoTone } from "@mui/icons-material";
import {
	Avatar,
	Box,
	Hidden,
	lighten,
	Link,
	ListItemAvatar,
	ListItemButton,
	Theme,
	Typography,
} from "@mui/material";

interface SearchResultItemProps {
	title: any;
	description: string;
	path: string;
}

const SearchResultItem = (props: SearchResultItemProps) => {
	return (
		<>
			<ListItemButton>
				<Hidden smDown>
					<ListItemAvatar>
						<Avatar
							sx={{
								background: (theme: Theme) => theme.palette.secondary.main,
							}}
						>
							<FindInPageTwoTone />
						</Avatar>
					</ListItemAvatar>
				</Hidden>
				<Box flex="1">
					<Box display="flex" justifyContent="space-between">
						<Link
							href={props.path}
							underline="hover"
							sx={{ fontWeight: "bold" }}
							variant="body2"
						>
							{props.title}
						</Link>
					</Box>
					<Typography
						component="span"
						variant="body2"
						sx={{
							color: (theme: Theme) =>
								lighten(theme.palette.secondary.main, 0.5),
						}}
					>
						{props.description}
					</Typography>
				</Box>
				<ChevronRightTwoTone />
			</ListItemButton>
		</>
	);
};

export interface SearchResultItemValue {
	title: string;
	description: string;
	link: string;
}

export default SearchResultItem;
