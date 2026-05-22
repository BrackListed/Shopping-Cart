import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "./Store";
import { ArrowLeft } from 'lucide-react';

export function Cart(){
    const userCart = useSelector((state: RootState) => state.Cart.cart)
    return(
        <div id = "container" className="w-full h-screen overflow-hidden flex flex-col bg-white text-zinc-900">
            <div id = "header" className="flex justify-between px-6 md:px-12 items-center border-b bg-zinc-900 border-zinc-100">
                <Link to = "/"><div className="text-sm font-medium text-zinc-50 hover:text-zinc-200 transition-colors cursor-pointer flex items-center gap-2 group"><ArrowLeft></ArrowLeft><span className="group-hover:-translate-x-1 transition-transform">Return to Store</span></div></Link>
                <img src = "/logo.png" alt = "Store logo BRACKLISTED" className="h-30"></img>
                <div className="text-xs font-medium text-zinc-400 tracking-wider uppercase">SHOPPING CART</div>
            </div>
            
            <div className="w-full px-6 md:px-12 mt-12">
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900 border-b border-zinc-100 pb-5">Review your items</h1>
                <div id = "actual-product-container">
                    {userCart.length <= 0 && <div>
                        <div className="flex flex-col gap-2 w-2xl my-10">
                            <h1 className="text-xl font-semibold text-zinc-900">Your cart is empty</h1>
                            <p className="text-zinc-500 max-w-sm text-sm">You haven't added any products to your cart yet. Head back to Store to add products to cart.</p>
                            <Link to = "/"><button className="mt-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm rounded-lg shadow-sm transition-all cursor-pointer">Browse Shop</button></Link>
                        </div>
                    </div>}
                </div>
            </div>


        </div>
    )
}