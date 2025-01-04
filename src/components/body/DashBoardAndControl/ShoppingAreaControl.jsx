import EditProductForm from "./EditProductForm";
import ShoppingControls from "./ShoppingControls";

export default function ShoppingAreaControl({setProducts, focusedItemId}) {
  return (
    <div className="bg-indigo-200 flex flex-col gap-6 my-4 p-4 rounded">
      <ShoppingControls setProducts={setProducts} focusedItemId={focusedItemId}/>
      <EditProductForm  setProducts={setProducts} focusedItemId={focusedItemId}/>
    </div>
  );
}
