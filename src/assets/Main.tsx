import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../Store"
import { addToCart } from "../ProductSlice";

interface ProductType {
    id: number;
    name: string;
    img: string;
    price: number;
}

export function ProductUI() {
    const selectedId = useSelector((state: RootState) => state.Products.selectedId)
    const dispatch = useDispatch()
    const productList = useSelector((state: RootState) => state.Products.products)
    const selectedProduct = productList.find((product) => product.id === selectedId)
    const currentCart = useSelector((state: RootState) => state.Cart.cart)
    return(
        <div className="flex gap-3">{productList.map((product: ProductType) => (
            <div className="w-64 bg-white border border-zinc-200 rounded-lg p-4 mx-5 shadow-sm flex flex-col gap-3">
                <div className="w-full h-48 bg-zinc-100 rounded flex items-center justify-center overflow-hidden">
                    <img src = {product.img} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-zinc-900 font-medium text-lg truncate">{product.name}</span>
                    <div className="flex gap-2">
                        <span className="text-zinc-600 font-semibold text-base">₱{product.price}</span>
                        <button onClick = {() => {dispatch(addToCart(product)), console.log(currentCart)}}className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium rounded duration-150 shadow-sm hover:cursor-pointer hover:outline-gray-400 hover:outline-2 hover:scale-105 transition-all">Add to Cart</button>
                    </div>
                </div>
            </div>
        ))}</div>
    )
}