import { configureStore } from "@reduxjs/toolkit";
import todolistSlice from "./slice/todolist-slice";

const reduxStore = configureStore({
  reducer: {
    todolist: todolistSlice.reducer
  }
})

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch

export default reduxStore