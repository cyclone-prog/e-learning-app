import { createSlice } from "@reduxjs/toolkit"

interface authInterface{
    isLoggedIn: boolean;
    jwt: string;
    
}
const initialState:authInterface = {
    isLoggedIn: false,
    jwt: ""
}
const authSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
        login:(state,data)=>{
            state.isLoggedIn = true;
            state.jwt = data.payload;
        },
        logout:(state) =>{
            state.isLoggedIn = false;
            state.jwt = "";
        }
    }
})
export default authSlice.reducer;
export const { login } = authSlice.actions;