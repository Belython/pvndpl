import {combineReducers, createStore} from "redux";
import dialogsReducer from "./DialogsReducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
});

let store = createStore(reducers);

export default store;