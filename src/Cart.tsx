import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "./Store";
import { ArrowLeft } from 'lucide-react';
import { removeFromCart, addQty, removeQty } from "./ProductSlice";





export function Cart(){
    const userCart = useSelector((state: RootState) => state.Cart.cart)
    const price = userCart.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0) //needs to take into account quantity.
    const dispatch = useDispatch()
    return(
        <div id = "container" className="fixed inset-0 w-full h-full overflow-y-auto flex flex-col bg-white text-zinc-900">
            <div id = "header" className="flex justify-between px-6 md:px-12 items-center border-b bg-zinc-900 border-zinc-100">
                <Link to = "/"><div className="text-sm font-medium text-zinc-50 hover:text-zinc-200 transition-colors cursor-pointer flex items-center gap-2 group"><ArrowLeft></ArrowLeft><span className="group-hover:-translate-x-1 transition-transform">Return to Store</span></div></Link>
                <img src = "/logo.png" alt = "Store logo BRACKLISTED" className="h-30"></img>
                <div className="text-xs font-medium text-zinc-400 tracking-wider uppercase">SHOPPING CART</div>
            </div>
            
            <div className="w-full flex-1 px-6 md:px-12 mt-12 pb-16 bg-white">
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900 border-b border-zinc-100 pb-5">Review your items</h1>
                <div id = "actual-product-container">
                    {userCart.length <= 0 && <div id = "if-no-product-placeholder">
                        <div className="flex flex-col gap-2 w-2xl my-10">
                            <h1 className="text-xl font-semibold text-zinc-900">Your cart is empty</h1>
                            <p className="text-zinc-500 max-w-sm text-sm">You haven't added any products to your cart yet. Head back to Store to add products to cart.</p>
                            <Link to = "/"><button className="mt-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm rounded-lg shadow-sm transition-all cursor-pointer">Browse Shop</button></Link>
                        </div>
                    </div>}
                    {/* how do u set this so that it wont map a new cartitem if that cartitem already exists */}
                    {userCart.map((cartItem) => (
                        <div id ="actual-product" className="flex items-center gap-5 py-6 border-b border-zinc-100 w-full justify-between">
                            <div className="flex gap-5">
                                <img src = {cartItem.img} alt = "product-image" className="w-30 h-30 bg-zinc-50 border border-zinc-200/80 rounded-xl justfy-center "></img>
                                <div id = "name-price" className="flex flex-col gap-3 h-25 justify-start">
                                    <p className="font-bold text-zinc-900 text-base tracking-tight leading-tight">{cartItem.name}</p>
                                    <p className="text-zinc-500 font-medium text-sm">₱{cartItem.price}</p>
                                    <div className="flex items-center bg-zinc-100 border border-zinc-200 rounded-full w-24 h-8 overflow-hidden mt-3">
                                        <button onClick={() => dispatch(removeQty(cartItem))}className="flex-1 h-full text-zinc-500 hover:bg-zinc-200/60 font-medium text-sm transition-colors cursor-pointer">-</button>
                                        <span className="w-8 text-center text-sm font-bold text-zinc-800 bg-white h-full flex items-center justify-center border-x border-zinc-200/80">{cartItem.quantity}</span>
                                        <button onClick={() => dispatch(addQty(cartItem))} className="flex-1 h-full text-zinc-500 hover:bg-zinc-200/60 font-medium text-sm transition-colors cursor-pointer">+</button>
                                    </div>
                                </div>
                            </div>
                            <button onClick = {() => {dispatch(removeFromCart(cartItem.id))}}className="text-xs font-semibold tracking-wider text-zinc-400 hover:text-red-500 transition-colors cursor-pointer px-2 py-1 rounded">Remove</button>
                        </div>
                        
                    ))}

                    {userCart.length > 0 && <div className="w-full max-w-md bg-zinc-50/50 border border-zinc-100 rounded-2xl my-5 p-6 flex flex-col gap-5">
                        <h1 className="text-lg font-bold tracking-tight text-zinc-900">Summary:</h1>
                        <div className="flex flex-col gap-3 border-b border-zinc-100 pb-5">
                            <div className="flex justify-between items-center text-sm font-medium text-zinc-500">
                                <span>Items Subtotal:</span>
                                <span className="text-zinc-900">₱{price}</span>
                            </div>

                            <div className="flex justify-between items-center text-sm font-medium text-zinc-500">
                                <span>Shipping:</span>
                                <span className="text-emerald-600">Free</span>
                            </div>

                        </div>

                        <div className="flex flex-col gap-5">
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-bold uppercase tracking-wider text-zinc-900">TOTAL: </span>
                                <span className="text-2xl font-black text-zinc-900">₱{price}</span>  
                            </div>
                            <button className="w-full bg-zinc-900 hover:bg-zinc-800 text-zinc-50 font-semibold text-sm py-3.5 rounded-xl transition-colors cursor-pointer shadow-sm">CHECKOUT</button>
                        </div>
                    </div>}


                </div>
            </div>
        </div>

    )

}