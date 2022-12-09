import { Box } from "@mui/material";
import HeaderSearch from "../../../components/search/SearchButton";

function HeaderButtons() {
	return (
		<Box sx={{ mr: 1 }}>
			<HeaderSearch />
			<Box sx={{ mx: 0.5 }} component="span"></Box>
		</Box>
	);
}

export default HeaderButtons;
