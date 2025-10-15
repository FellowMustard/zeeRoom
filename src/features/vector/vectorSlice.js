import { createSlice } from "@reduxjs/toolkit";
import { START_POSITION, START_ROTATION } from "../../lib/data";

const initialState = {
  isAnimating: false,
  isHome:false,
  position: START_POSITION,
  rotation: START_ROTATION
};

export const vectorSlice = createSlice({
  name: "vector",
  initialState,
  reducers: {
    animateDone(state) {
      state.isAnimating = false;
    },
    lerpTo(state, action) {
      const { position, rotation,isHome } = action.payload;
      state.isAnimating = true;
      state.position = position;
      state.rotation = rotation;
      state.isHome = isHome;
    },
  },
});

export const selectVectorPosition = (state) => state.vector.position;
export const selectVectorRotation = (state) => state.vector.rotation;
export const selectAnimatingStatus = (state) => state.vector.isAnimating;
export const checkIsHome = (state) =>state.vector.isHome;
export const { lerpTo,animateDone} = vectorSlice.actions;
export default vectorSlice.reducer;
