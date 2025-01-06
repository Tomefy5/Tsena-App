import BodyTsena from "./components/body/BodyTsena";
import Header from "./components/header/Header";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { UpdateListProductsLS } from "./utils/ProductHandlers";
import { UpdateListCollectionsLS } from "./utils/CollectionHandler";

// const listCollections = [
//   { id:nanoid(), name: 'Fruits', elements: [] },
//   { id:nanoid(), name: 'Vegetables', elements: [] },
//   { id:nanoid(), name: 'Clothes', elements: [] },
// ];

function App() {
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem("products");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  const [collections, setCollections] = useState(() => {
    const storedCollections = localStorage.getItem("collections");
    return storedCollections ? JSON.parse(storedCollections) : [];
  });

  const [focusedItemId, setFocusedItem] = useState(null);
  const [focusedCollectionId, setFocusedCollectionsId] = useState(null);

  useEffect(() => {
    UpdateListProductsLS(products);
  }, [products]);

  useEffect(() => {
    UpdateListCollectionsLS(collections);
  }, [collections]);

  return (
    <div className="bg-blue-100 absolute w-full h-auto">
      <div className="min-h-[100vh] w-full lg:w-4/5 mx-auto py-4 px-4">
        <h1 className="flex justify-center items-center gap-2 text-2xl font-bold bg-blue-800 text-white text-center py-2 w-11/12 md:w-4/5 mx-auto mb-4 md:mb-8 rounded">
          <span>TSENA</span>
          <ShoppingCart />
        </h1>
          <Header />
          <BodyTsena
            currentListProducts={products}
            setProducts={setProducts}
            focusedItemId={focusedItemId}
            setFocusedItem={setFocusedItem}
            collections={collections}
            setCollections={setCollections}
            focusedCollectionId={focusedCollectionId}
            setFocusedCollectionsId={setFocusedCollectionsId}
          />
      </div>
    </div>
  );
}

export default App;
