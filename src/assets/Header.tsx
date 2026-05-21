import { ShoppingCart, Search } from 'lucide-react'
export function Header() {
    
  return (
    <div className="w-full h-20 bg-zinc-900 border-b text-zinc-50 border-zinc-950 shadow-md flex items-center justify-between px-6">
        <img src = "/logo.png" alt = "Bracklisted Store Logo" className="h-40 auto object-contain"></img>
        <div className='flex items-center w-full max-w-xl mx-4'>
            <input placeholder = "Search for an item..." className='flex-1 h-10 px-4 rounded-l bg-white text-zinc-900 outline-none focus-visible: ring-4 focus-visible:ring-slate-600'></input>
            <button className='h-10 px-4 bg-orange-500 hover:bg-orange-600 hover:cursor-pointer text-white font-medium rounded-r transition-colors'><Search/></button>
        </div>
        <div className='flex gap-4 text-zinc-300 text-sm font-medium cursor-pointer transition-colors hover:text-white border border-transparent hover:border-zinc-700 rounded px-3 py-1.5'>View Cart <span><ShoppingCart/></span></div>
    </div>
  );
}