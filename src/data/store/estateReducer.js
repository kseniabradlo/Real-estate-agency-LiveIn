import {createSlice} from "@reduxjs/toolkit";

const estateSlice = createSlice({
    name: "estate",
    initialState:{
        estates: {}
    },
    reducers:{
        showAllData(state,action){
            state.estates=action.payload
        }
    }
})

export const {showAllData}=estateSlice.actions;
export default estateSlice.reducer;