import { Box, Layers, Tag, CreditCard } from "lucide-react";
import ShoppingItem from "./ShoppingItem";

const tabShoppingHeader = [
  { name: "", Icon: null },
  { name: "Product", Icon: Box },
  { name: "Quantity", Icon: Layers },
  { name: "Unit Price", Icon: Tag },
  { name: "Total Price", Icon: CreditCard },
];

export default function ShoppingCollection() {
  return (
    <>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
          <input className="cursor-pointer" type="checkbox" />
        </td>
        <td className="border border-gray-300 px-4 py-2 font-bold" colSpan={3}>
          Collection
        </td>
        <td className="border border-gray-300 px-4 py-2">2 kg</td>
      </tr>
      <tr>
        <td></td>
        <td colSpan={5}>
          <table className="text-center align-middle table-auto border-collpse borer border-gra-300 w-full text-red-950 text-sm">
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
              <ShoppingItem />
              <ShoppingItem />
              <ShoppingItem />
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
}
