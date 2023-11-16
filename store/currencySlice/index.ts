import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useState} from "react";

export interface currencyInterface {
    fromCurrency:string
    toCurrency:string
    amount:string
}

const initialState:currencyInterface = {
    fromCurrency:"🇺🇸 USD - United States",
    toCurrency:"🇦🇺 AUD - Australia",
    amount:""
}


const currencySliceReducer = createSlice({
    name:"currency",
    initialState,
    reducers:{
        setFromCurrency:(state , action)=>{
            state.fromCurrency = action.payload
        },
        setToCurrency:(state,action)=>{
            state.toCurrency = action.payload
        },
        setAmount:(state , action)=>{
            state.amount = action.payload
        }
    }


})

export const {setFromCurrency,setToCurrency,setAmount} = currencySliceReducer.actions
export default currencySliceReducer.reducer