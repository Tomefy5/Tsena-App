import { Fragment } from "react";
import ShoppingCollection from "./ShoppingCollection";
import ShoppingItem from "./ShoppingItem";
import { Box, Layers, Tag, CreditCard } from "lucide-react";

const tabShoppingHeader = [
  { name: "", Icon: null },
  { name: "Product", Icon: Box },
  { name: "Quantity", Icon: Layers },
  { name: "Unit Price", Icon: Tag },
  { name: "Total Price", Icon: CreditCard },
];

export default function ShoppingListTab({
  currentListProducts,
  setFocusedItem,
  setProducts,
  setCollections,
  collections,
  setFocusedCollectionsId,
}) {
  return (
    <div className="overflow-auto min-h-[30vh] max-h-[60vh] lg:max-h-[80vh]">
      <table className="text-center align-middle table-auto border-collpse borer border-gra-300 w-full text-blue-950 text-sm">
        <thead>
          <tr className="bg-gray-200 text-blue-900">
            {tabShoppingHeader.map((thead, index) => (
              <th key={index} className="border border-gray-300 px-4 py-2">
                <div className="flex items-center justify-center space-x-2">
                  {thead.Icon ? <thead.Icon size={18} /> : <></>}
                  <span>{thead.name}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentListProducts.map((product, index) =>
            product.collection === "" ? (
              <ShoppingItem
                key={index}
                product={product}
                setFocusedItem={setFocusedItem}
                setProducts={setProducts}
              />
            ) : (
              <Fragment key={index}></Fragment>
            )
          )}
          {collections.map((collection, index) => (
            <ShoppingCollection
              key={index}
              collection={collection}
              setCollections={setCollections}
              setFocusedCollectionsId={setFocusedCollectionsId}
              currentListProducts={currentListProducts}
              setFocusedItem={setFocusedItem}
              setProducts={setProducts}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
