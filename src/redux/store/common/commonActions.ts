import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import UserAPI from "api/UserAPI";
import { RootState } from "../rootReducer";
import { commonSlice } from "./commonSlice";

const commonActions = commonSlice.actions;
const getAndSetUser =
	(): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch) =>
		UserAPI.getUserInfo().then((user) => {
			dispatch(commonActions.getAndSetUser({ user: user }));
			console.log("getAndSetUser", user);
		});

const getAndSetActions =
	(): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch) =>
		console.log("getAndSetActions");

export { getAndSetUser, getAndSetActions };
