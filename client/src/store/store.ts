import { configureStore } from "@reduxjs/toolkit";
import { freePostSlice } from "./../slice/freePost";
// ...

export const store = configureStore({
  reducer: { freePost: freePostSlice.reducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
