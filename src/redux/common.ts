import { store } from "./store/rootReducer";
import { getAndSetUser, getAndSetActions } from "./store/common/commonActions";

const common = {
	getAndSetUser: () => store.dispatch(getAndSetUser()),
	getAndSetActions: () => store.dispatch(getAndSetActions()),
};

export default common;
