import {createSlice} from "@reduxjs/toolkit";
import {TABLE_HEAD, TABLE_DATA} from "@/__mocks__/index.js";

const initialState = {
  tableHead: [...TABLE_HEAD],
  tableData: [...TABLE_DATA],
  selectedContract: 0,
}

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setTableHead: (state, action) => {
      state.tableHead = action.payload;
    },
    setSelectedContract: (state, action) => {
      state.selectedContract = action.payload;
    }
  }
});

export const {setTableHead, setSelectedContract} = tableSlice.actions;
export default tableSlice.reducer;
