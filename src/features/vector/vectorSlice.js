import { createSlice } from "@reduxjs/toolkit";
import { START_POSITION, START_ROTATION } from "../../lib/data";

const initialState = {
  isAnimating: false,
  location: "",
  position: START_POSITION,
  rotation: START_ROTATION,
};

export const vectorSlice = createSlice({
  name: "vector",
  initialState,
  reducers: {
    animateDone(state) {
      state.isAnimating = false;
    },
    lerpTo(state, action) {
      const { position, rotation, location } = action.payload;
      state.isAnimating = true;
      state.position = position;
      state.rotation = rotation;
      state.location = location;
    },
  },
});

export const selectVectorPosition = (state) => state.vector.position;
export const selectVectorRotation = (state) => state.vector.rotation;
export const selectAnimatingStatus = (state) => state.vector.isAnimating;
export const selectCurrentLocation = (state) => state.vector.location;
export const { lerpTo, animateDone } = vectorSlice.actions;
export default vectorSlice.reducer;
