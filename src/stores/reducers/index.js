import {combineReducers} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

import screenSizeReducer from "@/stores/reducers/screenSize.js";
import tableReducer from "@/stores/reducers/table.js";
import formDataReducer from "@/stores/reducers/formData.js";

const screenSizeConfig = {
  key: 'screenSize',
  storage,
  whitelist: ['horizontalScreen', 'topVerticalScreen', 'bottomVerticalScreen']
}

const rootReducer = combineReducers({
  screenSizeReducer: persistReducer(screenSizeConfig, screenSizeReducer),
  tableReducer,
  formDataReducer
});

export default rootReducer;
