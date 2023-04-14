import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  horizontalScreen: [50, 50],
  topVerticalScreen: [50, 50],
  bottomVerticalScreen: [50, 50],
  isSaved: false
}

const screenSizeSlice = createSlice({
  name: 'screenSize',
  initialState,
  reducers: {
    setScreenSize: (state, action) => {
      state.isSaved = true;
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

export const {setScreenSize} = screenSizeSlice.actions;
export default screenSizeSlice.reducer;
