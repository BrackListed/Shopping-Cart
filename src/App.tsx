import { Header } from "./assets/Header";
import { ProductUI } from "./assets/Main";


export default function App() {
  return(
    <div className="flex flex-col gap-5">
      <Header/>
      <ProductUI/>
    </div>
  )
}