import type { RootState } from '../Store';
import { ShoppingCart } from 'lucide-react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useFetchedProduct } from '../ProductSlice';

interface ProductTypeTest {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string
    quantity: number;
}


type HeaderProps = {
  searchQuery: string
  setSearchQuery: (value:string) => void;
  suggestions: ProductTypeTest[]
}

export function Header({searchQuery, setSearchQuery, suggestions}: HeaderProps) {
  const mockProducts = useFetchedProduct()
  const userCart = useSelector((state: RootState) => state.Cart.cart)
  const cartLength = userCart.length
  return (
    <div className="w-full h-20 bg-zinc-900 border-b border-zinc-950 shadow-md flex items-center justify-between px-6">
        <img src = "/logo.png" alt = "Bracklisted Store Logo" className="h-40 auto object-contain"></img>
        <div className='flex relative justify-center w-full max-w-xl mx-4'>
          <input onChange = {(e) => setSearchQuery(e.target.value)}placeholder = "Search for an item..." className='flex-1 h-10 px-4 rounded-l bg-white text-zinc-900 outline-none focus-visible: ring-4 focus-visible:ring-slate-600'></input>
          {(suggestions.length > 0 && searchQuery.length > 0) && <div className="absolute top-full left-0 w-full mt-1 bg-white border border-zinc-200 rounded-lg shadow-xl overflow-hidden z-50 flex flex-col">
            {suggestions.map((product) => (
              <div className='px-4 py-3 text-zinc-800 text-sm font-medium hover:bg-zinc-100 border-b border-zinc-100 last:border-b-0 cursor-pointer flex items-center gap-3 transition-colors duration-150'>{product.title}</div>
            ))}
          </div>}
        </div>
        <Link to = "/Cart"><div className=' relative flex gap-4 text-zinc-300 text-sm font-medium cursor-pointer transition-colors hover:text-white border border-transparent hover:border-zinc-700 rounded px-3 py-1.5'>
          View Cart<span><ShoppingCart/></span> <div className='absolute -bottom-2 -right-2 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm'>{cartLength}</div>
          </div></Link>
    </div>
  );
}