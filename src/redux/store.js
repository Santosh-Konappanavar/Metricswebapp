import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './coinslice';

const store = configureStore({
  reducer: {
    coins: coinReducer,
  },
});

export default store;
