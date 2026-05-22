import { createSlice } from "@reduxjs/toolkit";

interface ProductType {
    id: number;
    name: string;
    img: string;
    price: number;
}


const StoreProducts: ProductType[] = [
    {id: 1, name: "Air Conditioner", img: "Products/Air_Conditioner.png", price: 8000},
    {id: 2, name: "Ceiling Fan", img: "Products/Ceiling_Fan.png", price: 5000},
    {id: 3, name: "Gaming Laptop", img: "Products/Gaming_Laptop.png", price: 50000},
    {id: 4, name: "Pressure Cooker", img: "Products/Pressure_Cooker.png", price: 2000},
    {id: 5, name: "School Bag", img: "Products/School_Bag.png", price: 4500},
]

const userCart: ProductType[] = JSON.parse(localStorage.getItem("cart-storage") ?? "[]") ?? []

const initialProductState = {
    products: StoreProducts,
    selectedId: 0
}

const initialCartState = {
    cart: userCart
}

const ProductSlice = createSlice({
    name: "Product",
    initialState: initialProductState,
    reducers: {
        selectProduct: (state, action) => {
            state.selectedId = action.payload //selected id is equal to the id that was clicked!
        }
    }
})

const cartSlice =  createSlice({
    name: "Cart",
    initialState: initialCartState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
            localStorage.setItem("cart-storage", JSON.stringify(state.cart))
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((c) => c.id !== action.payload)
            localStorage.setItem("cart-storage", JSON.stringify(state.cart))
        }
    }
})


export const {selectProduct} = ProductSlice.actions
export const {addToCart, removeFromCart} = cartSlice.actions

export const productReducer = ProductSlice.reducer
export const cartReducer = cartSlice.reducer

