import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  value: [
    {
      id: nanoid(),
      text: "Add Some To Do",
    },
  ],
}

const todolistSlice = createSlice({
  initialState,
  name: 'ToDoList', 
  reducers: {
    addToDo: (state, action) => {
      state.value.push(action.payload)
    }, 
    resetToDo: (state) => {
      state.value = []
    }, 
    removeToDo: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload)
    }
  }
})

export default todolistSlice