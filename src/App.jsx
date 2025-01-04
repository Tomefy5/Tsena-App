import BodyTsena from "./components/body/BodyTsena";
import Header from "./components/header/Header";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { UpdateListProductsLS } from "./utils/ProductHandlers";

// const listShoppingProduct = [
//   { id: nanoid(), name: "Bread", quantity: 10, unitPrice: 200, collection: "", isFinished: false },
//   { id: nanoid(), name: "Meat", quantity: 10, unitPrice: 200, collection: "" , isFinished: false },
// ];

function App() {

  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : []
  })

  useEffect(() => {
    UpdateListProductsLS(products);
  },[products]);

  return (
    <div className="bg-blue-100 absolute w-full h-auto">
      <div className="min-h-[100vh] w-full lg:w-4/5 mx-auto py-4 px-4">
        <h1 className="flex justify-center items-center gap-2 text-2xl font-bold bg-blue-800 text-white text-center py-2 w-11/12 md:w-4/5 mx-auto mb-4 md:mb-8 rounded">
          <span>TSENA</span>
          <ShoppingCart />
        </h1>
        <Header />
        <BodyTsena currentListProducts={products} setProducts={setProducts}/>
      </div>
    </div>
  );
}

export default App;
