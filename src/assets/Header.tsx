import type { RootState } from '../Store';
import { ShoppingCart, Search } from 'lucide-react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export function Header() {
  
  const userCart = useSelector((state: RootState) => state.Cart.cart)
  const cartLength = userCart.length
  return (
    <div className="w-full h-20 bg-zinc-900 border-b text-zinc-50 border-zinc-950 shadow-md flex items-center justify-between px-6">
        <img src = "/logo.png" alt = "Bracklisted Store Logo" className="h-40 auto object-contain"></img>
        <div className='flex items-center w-full max-w-xl mx-4'>
            <input placeholder = "Search for an item..." className='flex-1 h-10 px-4 rounded-l bg-white text-zinc-900 outline-none focus-visible: ring-4 focus-visible:ring-slate-600'></input>
            <button className='h-10 px-4 bg-orange-500 hover:bg-orange-600 hover:cursor-pointer text-white font-medium rounded-r transition-colors'><Search/></button>
        </div>
        <Link to = "/Cart"><div className=' relative flex gap-4 text-zinc-300 text-sm font-medium cursor-pointer transition-colors hover:text-white border border-transparent hover:border-zinc-700 rounded px-3 py-1.5'>
          View Cart<span><ShoppingCart/></span> <div className='absolute -bottom-2 -right-2 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm'>{cartLength}</div>
          </div></Link>
    </div>
  );
}