import { useContext, useEffect, useState } from "react";
import { defineTotalPriceProduct } from "../../../utils/SimpleFunctions";
import FormTypeContext from "../../../contexts/FormTypeProvider";
import {
  IsFinishedHandler,
  SetProductInfoToForm,
} from "../../../utils/ProductHandlers";
import FormFocusContext from "../../../contexts/FormFocusProvider";
import CurrencyContext from "../../../contexts/CurrencyProvider";
import { ConvertCurrentMoney } from "../../../utils/MoneyBoarding";

export default function ShoppingItem({ product, setFocusedItem, setProducts }) {
  const { changeFormType } = useContext(FormTypeContext);
  const { setFocusForm } = useContext(FormFocusContext);
  const [unitPrice, setUnitPrice] = useState(product.unitPrice);
  const [totalPriceProd, setTotalPriceProd] = useState(
    defineTotalPriceProduct(product.quantity, product.unitPrice)
  );
  const { currency } = useContext(CurrencyContext);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    setUnitPrice(product.unitPrice);
  }, [product.unitPrice]);

  useEffect(() => {
    setTotalPriceProd(
      defineTotalPriceProduct(product.quantity, product.unitPrice)
    );
  }, [product.quantity, product.unitPrice]);

  useEffect(() => {
    isInitialRender
      ? setIsInitialRender(false)
      : setUnitPrice(ConvertCurrentMoney(currency, unitPrice));

    isInitialRender
      ? setIsInitialRender(false)
      : setTotalPriceProd(ConvertCurrentMoney(currency, totalPriceProd));
    
  }, [currency]);

  return (
    <tr
      onClick={() => {
        async function ItemProductClickHandler() {
          await changeFormType("editProd");
          await SetProductInfoToForm(product);
          await setFocusedItem(product.id);
          await setFocusForm();
        }

        ItemProductClickHandler();
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
      <td className="border border-gray-300 px-4 py-2">{unitPrice}</td>
      <td className="border border-gray-300 px-4 py-2">{totalPriceProd}</td>
    </tr>
  );
}
