import {ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "./ActionTypes";

export const addPostActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text })