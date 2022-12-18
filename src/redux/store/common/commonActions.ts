import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import UserAPI from "api/UserAPI";
import { RootState } from "../rootReducer";
import { commonSlice } from "./commonSlice";

const commonActions = commonSlice.actions;
const getAndSetMe =
	(): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch) =>
		UserAPI.getUserInfo().then((me) => {
			dispatch(commonActions.getAndSetUser({ me: me }));
			console.log("getAndSetUser", me);
		});

const getAndSetActions =
	(): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch) =>
		console.log("getAndSetActions");

export { getAndSetMe, getAndSetActions };
