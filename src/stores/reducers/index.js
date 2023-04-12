import {combineReducers} from "@reduxjs/toolkit";
import screenSizeReducer from "@/stores/reducers/screenSize.js";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

const screenSizeConfig = {
  key: 'screenSize',
  storage
}

const rootReducer = combineReducers({screenSizeReducer: persistReducer(screenSizeConfig, screenSizeReducer)});

export default rootReducer;
