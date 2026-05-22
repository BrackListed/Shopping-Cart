import { Header } from "./assets/Header";
import { Link } from "react-router-dom";

export function Cart(){
    return(
        <div className="min-h-screen bg-white text-zinc-900 p-6 md:p-12"> 
            <div id = "header" className="max-w-5xl mx-auto flex items-center justify-between border-b border-zinc-100 pb-6 mb-12">
                <Link to = "/"><div className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer flex items-center gap-2 group"><span className="group-hover:-translate-x-1 transition-transform">←</span>Back to Store</div></Link>
                <span className="text-xs font-medium text-zinc-400 tracking-wider uppercase">YOUR CART</span>
            </div>
        </div>
    )
}