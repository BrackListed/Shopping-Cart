import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";



interface ProductTypeTest {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string
    quantity: number;
}

const productUrl = ('https://fakestoreapi.com/products')

export const useFetchedProduct = () => {
    const dispatch = useDispatch()
    const [fetchedProducts, setFetchedProducts] = useState<ProductTypeTest[]>([])
    useEffect(() => {
        const fetchProducts = async() => {
            const response = await(fetch(productUrl))
            const tempFetchedProduct = await(response.json()) as ProductTypeTest[]
            const productwithQuantity = tempFetchedProduct.map((product: ProductTypeTest) => (
                {
                    ...product, 
                    quantity: 1
                }
            ))
            setFetchedProducts(productwithQuantity)
        }
        fetchProducts()
    }, [])
    dispatch(setProduct(fetchedProducts))
    return fetchedProducts;
}




const userCart: ProductTypeTest[] = JSON.parse(localStorage.getItem("cart-storage") ?? "[]") ?? []

const initialProductState = {
    products: [] as ProductTypeTest[],
    selectedId: 0
}

const initialCartState = {
    cart: userCart
}

const ProductSlice = createSlice({
    name: "Product",
    initialState: initialProductState,
    reducers: {
        setProduct: (state, action) => {
            state.products = action.payload
        },
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
            const selectedItem = state.cart.find((item) => item.id === action.payload.id)
            const isExisting = state.cart.some((item) => item.id === action.payload.id) 
            if(!isExisting ){ //if the is Existing doesn't return true, thereby saying the item is not equal to the action.payload, thereby saying it doesn't exist
                state.cart.push(action.payload) //push
                localStorage.setItem("cart-storage", JSON.stringify(state.cart))
            } else{
                selectedItem!.quantity += 1
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((c) => c.id !== action.payload)
            localStorage.setItem("cart-storage", JSON.stringify(state.cart))
        },
        addQty: (state, action) => {
            const selectedItem = state.cart.find((item) => item.id === action.payload.id) //supposed to return the item that satisfies the condition, i.e the item that equals to the individual item it reeturned when it looped through the array
            if(selectedItem){ //if it returns true, meaning the item perfectly matches
                selectedItem.quantity += 1
            } 
        },
        removeQty: (state, action) => {
            const selectedItem = state.cart.find((item) => item.id === action.payload.id)
            if(selectedItem){
                selectedItem.quantity -= 1
                if(selectedItem.quantity <= 0){
                    state.cart = state.cart.filter((c) => c.id !== selectedItem.id)
                }
            }
        }
    }
})






export const {selectProduct, setProduct} = ProductSlice.actions
export const {addToCart, removeFromCart, addQty, removeQty} = cartSlice.actions
export const productReducer = ProductSlice.reducer
export const cartReducer = cartSlice.reducer
