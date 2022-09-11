import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import authReducer from "../features/auth/authSlice";
import conversationsReducer from "../features/auth/onversationsSlice";
import messagesReducer from "../features/auth/messagesSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
  },

  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares)=> getDefaultMiddlewares().concat(apiSlice.middleware),
});
