import { Trash, Folder , FolderMinusIcon } from "lucide-react"

const btnControls = [
    { label: 'Delete', Icon: Trash },
    { label: 'Add to Collection', Icon: Folder },
    { label: 'Remove from Collection', Icon: FolderMinusIcon },
]

export default function ShoppingControls() {
  return (
    <div className="flex justify-center gap-4 flex-wrap">
        {btnControls.map((btn, index) => (
            <button key={index} className="bg-blue-600 text-blue-200 flex gap-1 py-2 px-4 rounded">
                <btn.Icon/>
                <span className="font-medium">{btn.label}</span>
            </button>
        ))}
    </div>
  )
}
