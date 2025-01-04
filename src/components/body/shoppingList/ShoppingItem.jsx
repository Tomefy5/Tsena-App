import { defineTotalPriceProduct } from "../../../utils/SimpleFunctions";

export default function ShoppingItem({product}) {
  return (
    <tr className="hover:bg-blue-200">
      <td className="border border-gray-300 px-4 py-2">
        <input className="cursor-pointer" type="checkbox" />
      </td>
      <td className="border border-gray-300 px-4 py-2">{product.name}</td>
      <td className="border border-gray-300 px-4 py-2">{product.quantity}</td>
      <td className="border border-gray-300 px-4 py-2">{product.unitPrice}</td>
      <td className="border border-gray-300 px-4 py-2">{defineTotalPriceProduct(product.quantity, product.unitPrice)}</td>
    </tr>
  );
}
