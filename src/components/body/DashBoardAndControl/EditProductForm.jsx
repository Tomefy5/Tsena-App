import { useContext } from "react";
import FormTypeContext from "../../../contexts/FormTypeProvider";
import { InsertNewProduct } from "../../../utils/ProductHandlers";

const productTypeOption = [
  { option: "Weight", value: "weight" },
  { option: "Volume", value: "volume" },
  { option: "Length", value: "length" },
  { option: "Count", value: "count" },
  { option: "Surface", value: "surface" },
];

export default function EditProductForm({setProducts}) {
  const { formType } = useContext(FormTypeContext);

  return (
    <div className="bg-indigo-300 p-4 rounded-md">
      <h3 id="form-title" className="font-bold text-xl">
        {formType === "editProd"
          ? "Edit Selected Product "
          : formType === "createProd"
          ? "Create New Product "
          : "Edit Selected Product  "}
      </h3>

      <form onSubmit={(e) => {e.preventDefault()}} className="my-4 flex flex-col gap-5 md:gap-3">
        <div className="flex flex-col md:flex-row gap-1 md:gap-8">
          <label className="font-medium text-sm lg:text-base">Product</label>
          <input
            id="product-name-field"
            type="text"
            className="h-6 rounded px-2 py-1"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-8">
          <label className="font-medium text-sm lg:text-base">Unit Type</label>
          <select
            name="product-type"
            id="product-type-field"
            className="px-2 py-1 rounded font-medium"
          >
            {productTypeOption.map((option, index) => (
              <option key={index} value={option.value}>
                {option.option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-8">
          <label className="font-medium text-sm lg:text-base">Quantity</label>
          <input
            type="number"
            className="h-6 rounded px-2 py-1"
            id="product-quantity-field"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-8">
          <label className="font-medium text-sm lg:text-base">
            Unit Price (fmg)
          </label>
          <input
            type="number"
            className="h-6 rounded px-2 py-1"
            id="product-unit-price-field"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-8">
          <label className="font-medium text-sm lg:text-base">
            Total Price (fmg)
          </label>
          <input type="number" className="h-6 rounded px-2 py-1" />
        </div>
        <div className="mt-5">
          <button
            id="form-btn"
            className="bg-blue-500 hover:bg-blue-600 text-white hover:text-gray-100 transition-colors duration-200 px-4 py-2 rounded-md"
            onClick={formType === "createProd" ? () => {
              InsertNewProduct(formType, setProducts);
            } : undefined}
          >
            <span className="font-medium">
              {formType === "editProd"
                ? "Save Changes"
                : formType === "createProd"
                ? "Create"
                : "Autres"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
