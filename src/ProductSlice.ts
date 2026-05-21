import { createSlice } from "@reduxjs/toolkit";

interface ProductType {
    id: number;
    name: string;
    img: string;
    price: number;
}


const StoreProducts: ProductType[] = [
    {id: 1, name: "Air_Conditioner", img: "Products/Air_Conditioner.png", price: 8000},
    {id: 2, name: "Ceiling_Fan", img: "Products/Ceiling_Fan.png", price: 5000},
    {id: 3, name: "Gaming_Laptop", img: "Products/Gaming_Laptop.png", price: 50000},
    {id: 4, name: "Pressure_Cooker", img: "Products/Pressure_Cooker.png", price: 2000},
    {id: 5, name: "School_Bag", img: "Products/School_Bag.png", price: 4500},
]

const initialState = {
    initialState: StoreProducts,
    selectedId: 0
}

const ProductSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {
        selectProduct: (state, action) => {
            state.selectedId = action.payload 
        }
    }
})


export const {selectProduct} = ProductSlice.actions

export default ProductSlice.reducer
