import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    category: [],
    priceRange: { min: 0, max: 0 },
    availability: [],
    sorting: "lowToHigh",
    counter: 0,
    currentPage: 1,
    itemsPerPage: 12,
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    changePage: (state, action) => {
      state.filter.currentPage = action.payload;
    },
    resetPagination: (state) => {
      state.filter.currentPage = 1;
    },
  },
});
export const { changeFilter, changePage, resetPagination } = filterSlice.actions;

export default filterSlice.reducer;
