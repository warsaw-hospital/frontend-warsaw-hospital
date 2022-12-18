import { store } from "./store/rootReducer";
import { getAndSetMe, getAndSetActions } from "./store/common/commonActions";

const common = {
	getAndSetMe: () => store.dispatch(getAndSetMe()),
	getAndSetActions: () => store.dispatch(getAndSetActions()),
};

export default common;
