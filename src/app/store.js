import { configureStore } from "@reduxjs/toolkit";
import vectorReducer from "../features/vector/vectorSlice"

export default configureStore({
    reducer:{
        vector:vectorReducer
    }
})