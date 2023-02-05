import {configureStore} from '@reduxjs/toolkit';

import counterSlice from './reducers/counterSlice';
import listSlice from './reducers/listSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    list: listSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;