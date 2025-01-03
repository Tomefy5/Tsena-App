export default function EditProductForm() {
  return (
    <div className="bg-indigo-300 p-4 rounded-md">
      <h3 className="font-bold text-xl">Edit Selected Product</h3>
      <form className="my-4 flex flex-col gap-3">
        <div className="flex gap-5">
          <label className="font-medium text-sm lg:text-base">Product</label>
          <input type="text" className="h-6 rounded px-2 py-1"/>
        </div>
        <div className="flex gap-5">
          <label className="font-medium text-sm lg:text-base">Unit Type</label>
          <select name="product-type" id="product-type" className="px-2 py-1 rounded font-medium">
            <option value="weight">Weight</option>
            <option value="volume">Volume</option>
            <option value="length">Length</option>
            <option value="count">Count</option>
            <option value="surface">Surface</option>
          </select>
        </div>
        <div className="flex gap-5">
          <label className="font-medium text-sm lg:text-base">Quantity</label>
          <input type="number" className="h-6 rounded px-2 py-1"/>
        </div>
        <div className="flex gap-5">
          <label className="font-medium text-sm lg:text-base">Unit Price (fmg)</label>
          <input type="number" className="h-6 rounded px-2 py-1"/>
        </div>
        <div className="flex gap-5">
          <label className="font-medium text-sm lg:text-base">Total Price (fmg)</label>
          <input type="number" className="h-6 rounded px-2 py-1"/>
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
