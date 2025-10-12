import { createSlice } from "@reduxjs/toolkit";
import { START_POSITION } from "../../lib/data";

const initialState = {
  isActive: false,
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
    lerpTo(state, action) {
      const { position, rotation } = action.payload;
      state.position = position;
      state.rotation = rotation;
    },
  },
});

export const selectVectorPosition = (state) => state.vector.position;
export const selectVectorRotation = (state) => state.vector.rotation;
export const { start, lerpTo } = vectorSlice.actions;
export default vectorSlice.reducer;
