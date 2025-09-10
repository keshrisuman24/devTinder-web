import { configureStore } from "@reduxjs/toolkit";
import feedSlice from "./feedSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    feed: feedSlice,
  },
});

export default store;
