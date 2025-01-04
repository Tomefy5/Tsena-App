const productTypeOption = [
  { option: "Weight", value: "weight" },
  { option: "Volume", value: "volume" },
  { option: "Length", value: "length" },
  { option: "Count", value: "count" },
  { option: "Surface", value: "surface" },
];

export default function EditProductForm() {
  return (
    <div className="bg-indigo-300 p-4 rounded-md">
      <h3 className="font-bold text-xl">Edit Selected Product</h3>
      <form className="my-4 flex flex-col gap-5 md:gap-3">
        <div className="flex flex-col md:flex-row gap-1 md:gap-8">
          <label className="font-medium text-sm lg:text-base">Product</label>
          <input type="text" className="h-6 rounded px-2 py-1" />
        </div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-8">
          <label className="font-medium text-sm lg:text-base">Unit Type</label>
          <select
            name="product-type"
            id="product-type"
            className="px-2 py-1 rounded font-medium"
          >
            {productTypeOption.map((option, index) => (
              <option key={index} value={option.value}>{option.option}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-8">
          <label className="font-medium text-sm lg:text-base">Quantity</label>
          <input type="number" className="h-6 rounded px-2 py-1" />
        </div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-8">
          <label className="font-medium text-sm lg:text-base">
            Unit Price (fmg)
          </label>
          <input type="number" className="h-6 rounded px-2 py-1" />
        </div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-8">
          <label className="font-medium text-sm lg:text-base">
            Total Price (fmg)
          </label>
          <input type="number" className="h-6 rounded px-2 py-1" />
        </div>
        <div className="mt-5">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            <span className="font-medium">Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
}
