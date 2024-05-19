import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { reject } from 'lodash';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
 
export const fetchStocksThunk = createAsyncThunk(
  'financials/fetchStocks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/financials/get-stocks`)
      if (response.data) {
        return response.data;
      }
      return null;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const addStockThunk = createAsyncThunk(
  'financials/addStock',
  async (stockData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/financials/add-stock`, stockData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.data) {
        return response.data;
      }
      return null;
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);


const financialsSlice = createSlice({
  name: 'financials',
  initialState: {
    allStocks: [],
    selectedStock: null,

    loading: false,
    error: null,
  },
  reducers: {
    setSelectedStock: (state, action) => {
      state.selectedStock = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchStocksThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchStocksThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.allStocks = action.payload;
    })
    .addCase(fetchStocksThunk.rejected, (state,action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(addStockThunk.fulfilled, (state, action) => {
      state.allStocks.push(action.payload);
    })
    .addCase(addStockThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    
  }
})

export const { setSelectedStock, } = financialsSlice.actions;
export default financialsSlice.reducer;