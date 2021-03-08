import { createStore } from "redux";
import { currentActivity } from "./reducers";

const defaultState = {
    activity: "napping"
}

export const store = createStore(
    currentActivity, 
    defaultState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);