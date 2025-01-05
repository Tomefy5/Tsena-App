import EditProductForm from "./EditProductForm";
import ShoppingControls from "./ShoppingControls";

export default function ShoppingAreaControl({setProducts, focusedItemId, setCollections, focusedCollectionId}) {
  return (
    <div className="bg-indigo-200 flex flex-col gap-6 my-4 p-4 rounded">
      <ShoppingControls setProducts={setProducts} focusedItemId={focusedItemId} focusedCollectionId={focusedCollectionId} setCollections={setCollections}/>
      <EditProductForm  setProducts={setProducts} focusedItemId={focusedItemId} setCollections={setCollections} focusedCollectionId={focusedCollectionId}/>
    </div>
  );
}
