import { useState } from "react";
import { Header } from "./assets/Header";
import { ProductUI } from "./assets/Main";



export default function App() {
  const [isCartOpen, setisCartOpen] = useState(false)
  const [productClicked, setproductClicked] = useState(false)
  return(
    <div className="flex flex-col gap-5">
      <Header
      setisCartOpen = {setisCartOpen}
      />
      <ProductUI
      isCartOpen = {isCartOpen}
      setisCartOpen = {setisCartOpen}
      productClicked = {productClicked}
      setproductClicked= {setproductClicked}
      />
    </div>
  )
}