import { configureStore } from '@reduxjs/toolkit'
import loginUserReducer from './auth/loginUserSlice'
import authReducer from './auth/authSlice'
import registerUserReducer from './auth/registerUserSlice'

export const store = configureStore({
    reducer: {
        loginUser: loginUserReducer,
        auth: authReducer,
        registerUser: registerUserReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch