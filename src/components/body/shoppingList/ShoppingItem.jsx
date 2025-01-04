import { useContext } from "react";
import { defineTotalPriceProduct } from "../../../utils/SimpleFunctions";
import FormTypeContext from "../../../contexts/FormTypeProvider";
import {
  IsFinishedHandler,
  SetProductInfoToForm,
} from "../../../utils/ProductHandlers";

export default function ShoppingItem({ product, setFocusedItem, setProducts }) {
  const { changeFormType } = useContext(FormTypeContext);

  return (
    <tr
      onClick={() => {
        changeFormType("editProd");
        SetProductInfoToForm(product);
        setFocusedItem(product.id);
      }}
      onDoubleClick={() => {
        IsFinishedHandler(product.id, setProducts);
      }}
      className="hover:bg-blue-200"
    >
      <td className="border border-gray-300 px-4 py-2">
        <input
          className="cursor-pointer"
          type="checkbox"
          onChange={() => {
            IsFinishedHandler(product.id, setProducts);
          }}
          checked={product.isFinished}
        />
      </td>
      <td className="border border-gray-300 px-4 py-2">{product.name}</td>
      <td className="border border-gray-300 px-4 py-2">{product.quantity}</td>
      <td className="border border-gray-300 px-4 py-2">{product.unitPrice}</td>
      <td className="border border-gray-300 px-4 py-2">
        {defineTotalPriceProduct(product.quantity, product.unitPrice)}
      </td>
    </tr>
  );
}
