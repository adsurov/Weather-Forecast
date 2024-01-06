import { configureStore } from "@reduxjs/toolkit";
import coordsSlice from "./coordsSlice";
import weatherSlice from "./weatherSlice";
import mapSlice from "./mapSlice";
export const store = configureStore({
  reducer: {
		coords: coordsSlice,
		weather: weatherSlice,
		map: mapSlice,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
