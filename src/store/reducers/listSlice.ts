import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface ListState {
  list: Array<any>;
}

const initialState: ListState = {
  list: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<Array>) => {
      state.list = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setList} = listSlice.actions;

export default listSlice.reducer;
