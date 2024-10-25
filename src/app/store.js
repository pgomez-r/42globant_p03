import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Adjust the path if necessary

const store = configureStore({
  reducer: rootReducer,
});

export default store;
