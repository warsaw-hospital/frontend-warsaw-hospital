import CommonState from "./CommonState";
import { createSlice } from "@reduxjs/toolkit";
import UserRoleResponse from "models/user/UserRoleResponse";

export const initialState: CommonState = {
	isDoctor: undefined,
	user: undefined,
	actions: [],
};

export const commonSlice = createSlice({
	name: "common",
	initialState: initialState,
	reducers: {
		getAndSetUser(state, action) {
			state.user = action.payload.me;
			state.isDoctor = hasRole("ADMIN", action.payload.user.roles);
		},
	},
});

const hasRole = (roleName: string, roles?: UserRoleResponse[]): boolean => {
	return roles?.map((role) => role.name).includes(roleName) ?? false;
};

export const { getAndSetUser } = commonSlice.actions;
export default commonSlice.reducer;
