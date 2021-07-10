import {combineReducers} from "redux";

import initialState from "./initialState";
import {prefixes} from "../actions/_constants";

import getAsyncActionReducers from "./asyncActionReducer";

const socialsReducers = getAsyncActionReducers({
    actionTypePrefix: prefixes.SOCIALS,
    objectsInitialState: initialState.socials,
    isFetchingInitialState: initialState.isFetchingSocials
});

export default combineReducers({
    socials: socialsReducers.objectsReducer,
    isFetchingSocials: socialsReducers.isFetchingReducer,
});