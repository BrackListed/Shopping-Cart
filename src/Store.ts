import { configureStore } from "@reduxjs/toolkit";
import { productReducer, cartReducer } from "./ProductSlice"
export type RootState = ReturnType<typeof Store.getState>

export const Store = configureStore({
    reducer: {
        Products: productReducer,
        Cart: cartReducer
    }
})