import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "../slice/modal";
import { freePostApi } from "../slice/freePostApi";
import { commentApi } from "../slice/commentApi";
import { matchPostApi } from "./../slice/matchPostApi";

// ...

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    [freePostApi.reducerPath]: freePostApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [matchPostApi.reducerPath]: matchPostApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      freePostApi.middleware,
      commentApi.middleware,
      matchPostApi.middleware,
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
