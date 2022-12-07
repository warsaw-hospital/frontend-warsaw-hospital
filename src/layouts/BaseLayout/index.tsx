import PropTypes from "prop-types";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

interface BaseLayoutProps {
	children?: ReactNode;
}

const BaseLayout = (props: BaseLayoutProps) => {
	const { children } = props;
	return (
		<Box
			sx={{
				flex: 1,
				height: "100%",
			}}
		>
			{children || <Outlet />}
		</Box>
	);
};

BaseLayout.propTypes = {
	children: PropTypes.node,
};

export default BaseLayout;
