import { createSlice } from "@reduxjs/toolkit";

const initialState={
    position:{
        x:0,
        y:0,
        z:0
    },
    rotation:{
        x:0,
        y:0,
        z:0
    },
}

export const vectorSlice = createSlice({
    name:"vector",
    initialState,
    reducers:{
        lerpTo(state,action){
            const {position,rotation} = action.payload
            state.position = position;
            state.rotation = rotation
        }
        
    }
})

export const selectVector = (state) => state.vector
export const {lerpTo} = vectorSlice.actions;
export default vectorSlice.reducer