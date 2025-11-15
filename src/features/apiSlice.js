import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDataFromApi = createAsyncThunk(
  "api/fetchDataFromApi",
  async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    } else {
      const data = await response.json();
      const allowedCategories = [
        "smartphones",
        "laptops",
        "fragrances",
        "skin-care",
        "groceries",
        "home-decoration",
      ];
      const selectedProducts = data.products.filter((product) =>
        allowedCategories.includes(product.category)
      );
      return selectedProducts;
    }
  }
);

const initialState = {
  value: [],
  loading: false,
  error: null,
};

export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataFromApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataFromApi.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(fetchDataFromApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { changeFilter, changePage, resetPagination } = apiSlice.actions;

export default apiSlice.reducer;
