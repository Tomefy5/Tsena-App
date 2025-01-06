import { Trash, FolderMinusIcon } from "lucide-react";
import { DeleteProductHandler, RemoveFromCollectionHandler } from "../../../utils/ProductHandlers";
import { useContext } from "react";
import FormTypeContext from "../../../contexts/FormTypeProvider";
import { DeleteCollection } from "../../../utils/CollectionHandler";

const btnProductsControls = [
  { label: "Delete", Icon: Trash, color: "red" },
  { label: "Remove from Collection", Icon: FolderMinusIcon, color: "yellow" },
];

export default function ShoppingControls({
  focusedItemId,
  setProducts,
  focusedCollectionId,
  setCollections,
}) {
  const { formType } = useContext(FormTypeContext);

  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {(formType === "createProd" || formType === "editProd") &&
        btnProductsControls.map((btn, index) => (
          <button
            key={index}
            className={`${
              btn.color === "red"
                ? "bg-red-600 hover:bg-red-700"
                : "bg-amber-500 hover:bg-amber-600"
            } text-blue-200 flex gap-2 py-2 px-4 rounded transition-colors duration-200`}
            onClick={
              index === 0
                ? () => {
                    DeleteProductHandler(focusedItemId, setProducts);
                  }
                : index === 1
                ? () => {
                  RemoveFromCollectionHandler(focusedItemId, setProducts);
                }
                : undefined
            }
          >
            <btn.Icon size={23} />
            <span className="font-medium">{btn.label}</span>
          </button>
        ))}
      {(formType === "createCollection" || formType === "editCollection") && (
        <button
          onClick={() => {
            DeleteCollection(focusedCollectionId, setCollections);
          }}
          className="bg-red-600 hover:bg-red-700 text-blue-200 flex gap-2 py-2 px-4 rounded transition-colors duration-200"
        >
          <Trash />
          <span className="font-medium">Delete</span>
        </button>
      )}
    </div>
  );
}
