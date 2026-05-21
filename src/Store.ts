import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductSlice"
export type RootState = ReturnType<typeof Store.getState>

export const Store = configureStore({
    reducer: {
        Products: ProductReducer
    }
})