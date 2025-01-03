import { Filter, CheckCircle, XCircle } from 'lucide-react';

export default function TsenaFilter() {
  const filterBtn = [
    { name: "All", value: "all" , Icon: Filter},
    { name: "Completed", value: "completed", Icon: CheckCircle },
    { name: "Incomplete", value: "incomplete", Icon: XCircle },
  ];

  return (
    <div className="flex items-center flex-wrap justify-center">
      {filterBtn.map((btn, index) => (
        <button
          key={index}
          className="flex  gap-2 bg-blue-600 py-2 px-6 rounded-md mx-1 font-medium text-blue-100 my-1"
        >
          <btn.Icon/>
          {btn.name}
        </button>
      ))}
    </div>
  );
}
