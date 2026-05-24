import { useState } from "react";
import { Header } from "./assets/Header";
import { ProductUI } from "./assets/Main";
import { useFetchedProduct } from "./ProductSlice";
import { useSelector } from "react-redux";
import type { RootState } from "./Store";

export default function App() {
  const mockProducts = useFetchedProduct()
  const [productClicked, setproductClicked] = useState(false)
  const [addedProduct, setAddedProduct] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const suggestions = mockProducts.fetchedProducts.filter((p) => (
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) //if any of the products has a title that matches the searchquery
  ))
  const productList = useSelector((state: RootState) => state.Products.products)
  const selectedId = useSelector((state: RootState) => state.Products.selectedId)
  const selectedProduct = productList.find((product) => product.id === selectedId)
  return(
    
    <div className="flex flex-col gap-5">
    <div className={`fixed top-5 left-1/2 z-9999 flex items-center gap-3 min-w-75 px-6 py-4 rounded-lg shadow-lg bg-emerald-50 border border-emerald-500 text-emerald-800 font-medium transition-all duration-500 ease-out ${addedProduct ? 'translate-x-[-50%] translate-y-0 opacity-100' : 'translate-x-[-50%] translate-y-[-150%] opacity-0'}`}>
      <span className="text-emerald-500 text-lg font-bold">✓</span>
      <p className="m-0 font-sans">Item added to cart</p>
    </div>
      <Header
      searchQuery = {searchQuery}
      setSearchQuery = {setSearchQuery}
      suggestions = {suggestions}
      setproductClicked = {setproductClicked}
      />
      <ProductUI
      setAddedProduct = {setAddedProduct}
      productClicked = {productClicked}
      setproductClicked= {setproductClicked}
      selectedProduct = {selectedProduct}
      suggestions = {suggestions}
      />
    </div>
  )
}