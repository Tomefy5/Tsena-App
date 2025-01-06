import { Box, Layers, Tag, CreditCard } from "lucide-react";
import { Fragment, useContext } from "react";
import FormTypeContext from "../../../contexts/FormTypeProvider";
import { SetCollectionData } from "../../../utils/CollectionHandler";
import ShoppingItem from "./ShoppingItem";
import FilterContext from "../../../contexts/FilterProvider";

const tabShoppingHeader = [
  { name: "", Icon: null },
  { name: "Product", Icon: Box },
  { name: "Quantity", Icon: Layers },
  { name: "Unit Price", Icon: Tag },
  { name: "Total Price", Icon: CreditCard },
];

export default function ShoppingCollection({
  collection,
  setFocusedCollectionsId,
  currentListProducts,
  setFocusedItem,
  setProducts,
}) {
  const { activeFilter } = useContext(FilterContext);
  const { changeFormType } = useContext(FormTypeContext);
  return (
    <>
      <tr
        onClick={() => {
          async function CollectionClickHandler() {
            await changeFormType("editCollection");
            await setFocusedCollectionsId(collection.id);
            await SetCollectionData(collection.name);
          }
          CollectionClickHandler();
        }}
        className="hover:bg-blue-200"
      >
        <td className="border border-gray-300 px-4 py-2">
          <input className="cursor-pointer" type="checkbox" />
        </td>
        <td className="border border-gray-300 px-4 py-2 font-bold" colSpan={3}>
          {collection.name}
        </td>
        <td className="border border-gray-300 px-4 py-2">{1000}</td>
      </tr>
      <tr>
        <td></td>
        <td colSpan={5}>
          <table className="text-center align-middle table-auto border-collapse borer border-gra-300 w-full text-red-950 text-sm">
            <thead>
              <tr className="bg-gray-200 text-red-900">
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
                activeFilter === "all" ? (
                  collection.name.toLowerCase() === product.collection ? (
                    <ShoppingItem
                      key={index}
                      setFocusedItem={setFocusedItem}
                      setProducts={setProducts}
                      product={product}
                    />
                  ) : (
                    <Fragment key={index}></Fragment>
                  )
                ) : activeFilter === "completed" ? (
                  collection.name.toLowerCase() === product.collection &&
                  product.isFinished ? (
                    <ShoppingItem
                      key={index}
                      setFocusedItem={setFocusedItem}
                      setProducts={setProducts}
                      product={product}
                    />
                  ) : (
                    <Fragment key={index}></Fragment>
                  )
                ) : collection.name.toLowerCase() === product.collection &&
                  !product.isFinished ? (
                  <ShoppingItem
                    key={index}
                    setFocusedItem={setFocusedItem}
                    setProducts={setProducts}
                    product={product}
                  />
                ) : (
                  <Fragment key={index}></Fragment>
                )
              )}
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
}
