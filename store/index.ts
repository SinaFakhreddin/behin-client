import {combineReducers, configureStore} from "@reduxjs/toolkit";
import tokenSlice from "@/store/tokenSlice";
import currencySlice from "@/store/currencySlice";



const rootReducer = combineReducers({
    token: tokenSlice,
    currency:currencySlice
},);

export const store  = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export const AppDispatch = typeof store.dispatch

