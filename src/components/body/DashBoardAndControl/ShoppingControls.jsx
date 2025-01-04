import { Trash, Folder, FolderMinusIcon } from "lucide-react";

const btnControls = [
  { label: "Delete", Icon: Trash, color: "red" },
  { label: "Add to Collection", Icon: Folder, color: "green" },
  { label: "Remove from Collection", Icon: FolderMinusIcon, color: "yellow" },
];

export default function ShoppingControls() {
  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {btnControls.map((btn, index) => (
        <button
          key={index}
          className={`${
            btn.color === "red"
                ? 'bg-red-600'
                : btn.color === "green"
                ? 'bg-green-600'
                : 'bg-amber-500'
          } text-blue-200 flex gap-1 py-2 px-4 rounded`}
        >
          <btn.Icon />
          <span className="font-medium">{btn.label}</span>
        </button>
      ))}
    </div>
  );
}
