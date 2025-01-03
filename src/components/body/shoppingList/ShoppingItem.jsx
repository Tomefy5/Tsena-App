export default function ShoppingItem() {
  return (
    <tr className="hover:bg-red-300">
      <td className="border border-gray-300 px-4 py-2">
        <input className="cursor-pointer" type="checkbox" />
      </td>
      <td className="border border-gray-300 px-4 py-2">2 kg</td>
      <td className="border border-gray-300 px-4 py-2">4,000 Ar</td>
      <td className="border border-gray-300 px-4 py-2">Riz</td>
      <td className="border border-gray-300 px-4 py-2">2 kg</td>
    </tr>
  );
}
