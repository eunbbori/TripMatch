import { configureStore } from "@reduxjs/toolkit";
import { freePostSlice } from "./../slice/freePost";
import { modalSlice } from "./../slice/deleteModal";
import { freePostApi } from "./../slice/api";
// ...

export const store = configureStore({
  reducer: {
    freePost: freePostSlice.reducer,
    modal: modalSlice.reducer,
    [freePostApi.reducerPath]: freePostApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(freePostApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
