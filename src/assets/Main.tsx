import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../Store"
import { addToCart, selectProduct } from "../ProductSlice";
import { useFetchedProduct } from "../ProductSlice";


interface ProductType {
    id: number;
    name: string;
    img: string;
    price: number;
}


interface ProductTypeTest {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string
}


type MainProps = {
    productClicked: boolean
    setproductClicked: (value: boolean) => void
    setAddedProduct: (value: boolean) => void
}

export function ProductUI({productClicked, setproductClicked, setAddedProduct}: MainProps) {
    const mockProducts = useFetchedProduct()
    const selectedId = useSelector((state: RootState) => state.Products.selectedId)
    const dispatch = useDispatch()
    const productList = useSelector((state: RootState) => state.Products.products)
    const selectedProduct = productList.find((product) => product.id === selectedId)
    return(
    <div>
        {/* For when product is clicked, product popup */}
        {productClicked && 
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-lg bg-white border border-zinc-200 rounded-xl p-6 shadow-2xl flex flex-col gap-4">
            <button onClick = {() => setproductClicked(false)}className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 p-1 rounded-full hover:bg-zinc-100 transition-all cursor-pointer">X </button>
            <div>       
                <h2 className="text-2xl font-bold text-zinc-950 pr-8 truncate">{selectedProduct?.name}</h2>
            </div>

            <div className="w-full h-72 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img src = {selectedProduct?.img} className="w-full h-full object-contain p-4" />
            </div>

            <div className="flex items-center justify-evenly mt-2 pt-2 border-t border-zinc-100">
                <span className="text-2xl font-bold text-zinc-900">₱{selectedProduct?.price}</span>
                <button onClick = {() => {dispatch(addToCart(selectedProduct)), setAddedProduct(true), setTimeout(() => {
                    setAddedProduct(false)
                }, 1000);}}className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium rounded duration-150 shadow-sm hover:cursor-pointer hover:outline-gray-400 hover:outline-2 hover:scale-105 transition-all">Add to Cart</button>
                <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg shadow-md transition-all cursor-pointer">Buy Now</button>
            </div>
        </div>
        </div>}

        {/* Display Cart*/}

        {/* Display products */}
        <div className="flex gap-3">{mockProducts.map((product: ProductTypeTest) => (
            <div className="w-64 bg-white border border-zinc-200 rounded-lg p-4 mx-5 shadow-sm flex flex-col gap-3 hover:cursor-pointer">
                <div onClick = {() => {setproductClicked(true), dispatch(selectProduct(product.id))}} className="w-full h-48 bg-zinc-100 rounded flex items-center justify-center overflow-hidden">
                    <img src = {product.image} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                    <span onClick = {() => {setproductClicked(true), dispatch(selectProduct(product.id))}} className="text-zinc-900 font-medium text-lg truncate">{product.title}</span>
                    <div className="flex gap-2">
                        <span className="text-zinc-600 font-semibold text-base">₱{product.price}</span>
                        <button onClick = {() => {dispatch(addToCart(product)), setAddedProduct(true), setTimeout(() => {
                            setAddedProduct(false)
                        }, 1000);}} className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium rounded duration-150 shadow-sm hover:cursor-pointer hover:outline-gray-400 hover:outline-2 hover:scale-105 transition-all">Add to Cart</button>
                    </div>
                </div>
            </div>
        ))}</div>
    </div>    
    )
}