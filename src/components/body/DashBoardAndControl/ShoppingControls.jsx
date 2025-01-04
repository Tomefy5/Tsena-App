import { Trash, Folder, FolderMinusIcon } from "lucide-react";
import { DeleteProductHandler } from "../../../utils/ProductHandlers";

const btnControls = [
  { label: "Delete", Icon: Trash, color: "red" },
  { label: "Add to Collection", Icon: Folder, color: "green" },
  { label: "Remove from Collection", Icon: FolderMinusIcon, color: "yellow" },
];

export default function ShoppingControls({focusedItemId, setProducts}) {
  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {btnControls.map((btn, index) => (
        <button
          key={index}
          className={`${
            btn.color === "red"
                ? 'bg-red-600 hover:bg-red-700'
                : btn.color === "green"
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-amber-500 hover:bg-amber-600'
          } text-blue-200 flex gap-2 py-2 px-4 rounded transition-colors duration-200`}

          onClick={index === 0 ? () => {
            DeleteProductHandler(focusedItemId, setProducts);
          } : undefined}
        >
          <btn.Icon size={23} />
          <span className="font-medium">{btn.label}</span>
        </button>
      ))}
    </div>
  );
}
