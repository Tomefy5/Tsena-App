import { PlusCircleIcon,FolderPlus, RotateCw } from "lucide-react";

const btnShoppingAction = [
  { label: "Add Product", Icon: PlusCircleIcon },
  { label: "Create Collection", Icon: FolderPlus },
  { label: "Change Currency", Icon: RotateCw},
];

export default function ShoppingMenuAction() {
  return (
    <div className="p-3 rounded flex gap-2 mt-2 mb-8 flex-wrap justify-center">
      {btnShoppingAction.map((btn, index) => (
        <button key={index} className="bg-lime-500 flex gap-2 text-lime-100 py-2 px-6 rounded-md mx-1 font-medium">
            <btn.Icon/>
          <span>{btn.label}</span>
        </button>
      ))}
    </div>
  );
}
