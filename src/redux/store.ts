import { configureStore } from '@reduxjs/toolkit'
import loginUserReducer from './auth/loginUserSlice'
import authReducer from './auth/authSlice'
import registerUserReducer from './auth/registerUserSlice'
import adminLoginReducer from './auth/loginAdminSlice'
import fetchValueReducer from './admin/fetchValueSlice'

export const store = configureStore({
    reducer: {
        loginUser: loginUserReducer,
        auth: authReducer,
        registerUser: registerUserReducer,
        adminLogin: adminLoginReducer,
        fetchValue: fetchValueReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {loginUser: LoginUserState, auth: AuthState, registerUser: RegisterUserState, adminAuth: AdminAuthState, adminLogin: AdminLoginState}
export type AppDispatch = typeof store.dispatch