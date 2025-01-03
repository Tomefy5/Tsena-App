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

export default function ShoppingListTab() {
  return (
    <div className="overflow-auto min-h-[30vh] max-h-[60vh]">
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
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingItem />
          <ShoppingCollection/>
        </tbody>
      </table>
    </div>
  );
}
