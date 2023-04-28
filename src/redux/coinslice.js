import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import 'regenerator-runtime/runtime';

/* eslint-disable camelcase */
export const fetchCoins = createAsyncThunk('companies/fetchCompanies', async () => {
  const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=46&page=1&sparkline=false');
  const coins = res.data.map((coin) => {
    const {
      id, name, image, current_price, price_change_percentage_24h,
    } = coin;
    return {
      id, name, image, current_price, price_change_percentage_24h,
    };
  });
  return coins;
});

const initialState = [];
const coinSlice = createSlice({
  name: 'coins',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.fulfilled, (state, action) => action.payload);
  },
});
export default coinSlice.reducer;
