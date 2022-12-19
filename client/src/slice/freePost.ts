import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

export const freePostSlice = createSlice({
  name: "freePost",
  initialState: initialState,
  reducers: {
    addFreePost: (state, action) => {
      const newPost = action.payload;
      state.unshift(newPost);
    },
    removeFreePost: (state, action) =>
      state.filter((post: any) => post.id !== action.payload),
  },
});

export const { addFreePost, removeFreePost } = freePostSlice.actions;
