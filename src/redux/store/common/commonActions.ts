import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { commonSlice } from "./commonSlice";

const commonActions = commonSlice.actions;
const getAndSetMe =
	(): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch) =>
		console.log("getAndSetMe");
// UserAPI.getUser().then((me) =>
// 	dispatch(commonActions.getAndSetMe({ me: me }))
// );

const getAndSetActions =
	(): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch) =>
		console.log("getAndSetActions");
// UserAPI.getActions().then((data: any) =>
// 	dispatch(commonActions.getAndSetActions({ actions: data.actions }))
// );

export { getAndSetMe, getAndSetActions };
