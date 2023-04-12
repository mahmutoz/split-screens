import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  horizontalScreen: [0, 0],
  topVerticalScreen: [0, 0],
  bottomVerticalScreen: [0, 0],
}

const screenSizeSlice = createSlice({
  name: 'screenSize',
  initialState,
  reducers: {
    setScreenSize: (state, action) => {
      switch (action.payload.type) {
        case 'horizontalScreen':
          state.horizontalScreen = action.payload.value;
          break;
        case 'topVerticalScreen':
          state.topVerticalScreen = action.payload.value;
          break;
        case 'bottomVerticalScreen':
          state.bottomVerticalScreen = action.payload.value;
          break;
        default:
          break;
      }
    },
  }
});

// // Save data to localStorage
// export const screenSizeMiddleware = store => next => action => {
//   console.log("store.getState()", store.getState())
//   const {screenSizeSlice} = store.getState();
//   localStorage.setItem('screenSize', JSON.stringify({...screenSizeSlice}));
//   return next(action);
// };
//
// // Load data from localStorage
// export const loadScreenSize = () => {
//   const data = localStorage.getItem('screenSize');
//   return data ? JSON.parse(data) : null;
// };

export const {setScreenSize} = screenSizeSlice.actions;
export default screenSizeSlice.reducer;
