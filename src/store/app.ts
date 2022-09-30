import { configureStore } from '@reduxjs/toolkit'
// import commonReducer from "./common";
import eventsReducer from './reducers/events'
// import usersReducer from "./reducers/users";
// import categoriesReducer from "./reducers/categories";
// import modifiersReducer from "./reducers/modifiers";
// import reportReducer from "./reducers/report";
// import orderReducer from "./reducers/order";

export const store = configureStore({
  reducer: {
    eventsReducer
    // productReducer,
    // usersReducer,
    // categoriesReducer,
    // modifiersReducer,
    // orderReducer,
    // reportReducer,
    // commonReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
