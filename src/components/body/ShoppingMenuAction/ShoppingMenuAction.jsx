import { PlusCircleIcon, FolderPlus, RotateCw } from "lucide-react";
import { useContext } from "react";
import FormTypeContext from "../../../contexts/FormTypeProvider";

const btnShoppingAction = [
  { label: "Add Product", Icon: PlusCircleIcon },
  { label: "Create Collection", Icon: FolderPlus },
  { label: "Change Currency", Icon: RotateCw },
];

export default function ShoppingMenuAction() {

  const { changeFormType } = useContext(FormTypeContext);

  return (
    <div className="p-3 rounded flex gap-2 mt-2 mb-8 flex-wrap justify-center">
      {btnShoppingAction.map((btn, index) => (
        <button
          key={index}
          className="bg-lime-500 hover:bg-lime-600 transition-colors duration-200  flex gap-2 text-lime-100 py-2 px-6 rounded-md mx-1 font-medium"
          onClick={index === 0 ? () => {
            changeFormType('createProd');
          } : index === 1 ? () => {
            changeFormType('createCollection');               
          } : undefined}
        >
          <btn.Icon />
          <span>{btn.label}</span>
        </button>
      ))}
    </div>
  );
}
