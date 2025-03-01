import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.js";
import taskReducer from "../features/tasks/taskSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    task: taskReducer
  },
});

export default store;
