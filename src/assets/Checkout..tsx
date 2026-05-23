import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import type { RootState } from "../Store";
import { useSelector } from "react-redux";

export function Checkout(){
    const userCart = useSelector((state: RootState) => state.Cart.cart)
    const cartLength = userCart.length
    return(
        <div className="flex flex-col min-h-screen bg-zinc-50">
           <div id="header" className="w-full flex justify-between px-6 md:px-12 py-4 items-center border-b bg-zinc-900 border-zinc-800">
                <Link to = "/"><div className="text-sm font-medium text-zinc-50 hover:text-zinc-200 transition-colors cursor-pointer flex items-center gap-2 group"><ArrowLeft></ArrowLeft><span className="group-hover:-translate-x-1 transition-transform">Return to Store</span></div></Link>
                <img src="/logo.png" alt="Store logo" className="h-32 w-auto object-contain" />
                <Link to = "/Cart"><div className=' relative flex gap-4 text-zinc-300 text-sm font-medium cursor-pointer transition-colors hover:text-white border border-transparent hover:border-zinc-700 rounded px-3 py-1.5'>
                View Cart<span><ShoppingCart/></span> <div className='absolute -bottom-2 -right-2 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm'>{cartLength}</div>
                </div></Link>
            </div>

            <div className="w-full max-w-3xl mx-auto flex flex-col bg-white p-8 rounded-2xl mt-10 mb-20 border border-gray-100 shadow-sm font-sans space-y-8">
                <div id = "contact-info" className="flex flex-col gap-4 border-b border-zinc-200 py-6">
                    <h1 className="text-xl font-bold text-gray-900">Contact Information</h1>
                    <label className="flex flex-col text-sm font-medium text-gray-700 gap-2">
                        Email Address:
                        <input type = "email" className="w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"></input>
                    </label>
                </div>

                <div className="flex flex-col gap-4">
                    <span className="text-xl font-bold text-gray-900 mb-2">Shipping Address</span>
                    <div className="flex gap-4 w-full">
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-sm font-medium text-gray-700">First Name</label>
                            <input type="text" className="w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-sm font-medium text-gray-700">Last Name</label>
                            <input type="text" className="w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <label className="text-sm font-medium text-gray-700">Address</label>
                        <input type="text" className="w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>        

                    <div className="flex gap-4 w-full">
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-sm font-medium text-gray-700">City</label>
                            <input type="text" className="w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-sm font-medium text-gray-700">Postal Code</label>
                            <input type="text" className="w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl shadow-md mt-4 transition duration-200 hover:cursor-pointer">Complete Order</button>

                </div>

            </div>
        </div>
    )
}