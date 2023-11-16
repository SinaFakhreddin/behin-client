import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type User = {
    id:string
    name:string
}



interface TokenSliceInterface {
    token:string|undefined
    user?:User
}


const initialState:TokenSliceInterface = {
    token:undefined,
    user:undefined
}


const tokenSlice = createSlice({
    name:"token",
    initialState,
    reducers:{
        setToken:(state , action:PayloadAction<string|undefined>)=>{
            state.token = action.payload
        },

        updateLoggedInUser:(state,action:PayloadAction<User>)=>{
            state.user = action.payload
        }
    }
})

export const {setToken,updateLoggedInUser} = tokenSlice.actions

export default tokenSlice.reducer