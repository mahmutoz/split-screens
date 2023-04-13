import {createSlice} from "@reduxjs/toolkit";
import {FORM_DATA} from "@/__mocks__/index.js";

const initialState = {
  formData: [...FORM_DATA]
}

const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData.push(action.payload);
    }
  }
});

export const {setFormData} = formDataSlice.actions;
export default formDataSlice.reducer;
