import {combineReducers} from "@reduxjs/toolkit";
import screenSizeReducer from "@/stores/reducers/screenSize.js";
import tableReducer from "@/stores/reducers/table.js";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

const screenSizeConfig = {
  key: 'screenSize',
  storage,
  whitelist: ['horizontalScreen', 'topVerticalScreen', 'bottomVerticalScreen']
}

const rootReducer = combineReducers({
  screenSizeReducer: persistReducer(screenSizeConfig, screenSizeReducer),
  tableReducer
});

export default rootReducer;
