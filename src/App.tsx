import { useState } from "react";
import { Header } from "./assets/Header";
import { ProductUI } from "./assets/Main";



export default function App() {
  const [productClicked, setproductClicked] = useState(false)
  return(
    <div className="flex flex-col gap-5">
      <Header
      />
      <ProductUI
      productClicked = {productClicked}
      setproductClicked= {setproductClicked}
      />
    </div>
  )
}