import { createSlice } from "@reduxjs/toolkit";
import { START_POSITION } from "../../lib/data";

const initialState = {
  isActive: false,
  isAnimating:false,
  position: START_POSITION,
  rotation: {
    x: 0,
    y: 0,
    z: 0,
  },
};

export const vectorSlice = createSlice({
  name: "vector",
  initialState,
  reducers: {
    start(state) {
      state.isActive = true;
    },
    animate(state,action){
        state.isAnimating = action.payload
    },
    lerpTo(state, action) {
      const { position, rotation } = action.payload;
      state.position = position;
      state.rotation = rotation;
      animate(state,true)
    },
  },
});

export const selectVectorPosition = (state) => state.vector.position;
export const selectVectorRotation = (state) => state.vector.rotation;
export const selectActiveStatus = (state) => state.vector.isActive;
export const { start, lerpTo, animate } = vectorSlice.actions;
export default vectorSlice.reducer;
