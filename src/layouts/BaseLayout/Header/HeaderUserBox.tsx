import { useRef, useState } from "react";

import { NavLink } from "react-router-dom";

import {
	Avatar,
	Box,
	Button,
	Divider,
	Hidden,
	lighten,
	List,
	ListItemButton,
	ListItemText,
	Popover,
	Typography,
} from "@mui/material";

import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";
import InboxTwoToneIcon from "@mui/icons-material/InboxTwoTone";
import LockOpenTwoToneIcon from "@mui/icons-material/LockOpenTwoTone";
import { styled } from "@mui/material/styles";

function HeaderUserbox() {
	const user = {
		name: "Vardenis Pavardenis",
		avatar: undefined,
		jobtitle: "Logged in as patient",
	};

	const ref = useRef<any>(null);
	const [isOpen, setOpen] = useState<boolean>(false);

	const handleOpen = (): void => {
		setOpen(true);
	};

	const handleClose = (): void => {
		setOpen(false);
	};

	return (
		<>
			<UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
				<Avatar variant="rounded" alt={user.name} src={user.avatar} />
				<Hidden mdDown>
					<UserBoxText>
						<UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
						<UserBoxDescription variant="body2">
							{user.jobtitle}
						</UserBoxDescription>
					</UserBoxText>
				</Hidden>
				<Hidden smDown>
					<ExpandMoreTwoToneIcon sx={{ ml: 1 }} />
				</Hidden>
			</UserBoxButton>
			<Popover
				anchorEl={ref.current}
				onClose={handleClose}
				open={isOpen}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<MenuUserBox sx={{ minWidth: 210 }} display="flex">
					<Avatar
						variant="rounded"
						alt={user.name}
						src={user.avatar}
						sx={{ mr: 1 }}
					/>
					<UserBoxText>
						<UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
						<UserBoxDescription variant="body2">
							{user.jobtitle}
						</UserBoxDescription>
					</UserBoxText>
				</MenuUserBox>
				<Divider sx={{ mb: 0 }} />
				<List sx={{ p: 1 }} component="nav">
					<ListItemButton to="/management/profile/details" component={NavLink}>
						<AccountBoxTwoToneIcon fontSize="small" sx={{ mr: 1 }} />

						<ListItemText primary="My Appointments" />
					</ListItemButton>
					<ListItemButton to="/management/profile/settings" component={NavLink}>
						<AccountTreeTwoToneIcon fontSize="small" sx={{ mr: 1 }} />
						<ListItemText primary="Profile settings" />
					</ListItemButton>
					<ListItemButton to="/dashboards/messenger" component={NavLink}>
						<InboxTwoToneIcon fontSize="small" sx={{ mr: 1 }} />
						<ListItemText primary="Contact us" />
					</ListItemButton>
				</List>
				<Divider />
				<Box sx={{ m: 1 }}>
					<Button color="primary" fullWidth>
						<LockOpenTwoToneIcon sx={{ mr: 1 }} />
						Sign out
					</Button>
				</Box>
			</Popover>
		</>
	);
}

const UserBoxButton = styled(Button)(
	({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`
);

const MenuUserBox = styled(Box)(
	({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        padding: ${theme.spacing(2)};
`
);

const UserBoxText = styled(Box)(
	({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`
);

const UserBoxLabel = styled(Typography)(
	({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
`
);

const UserBoxDescription = styled(Typography)(
	({ theme }) => `
        color: ${lighten(theme.palette.secondary.main, 0.5)}
`
);
export default HeaderUserbox;
