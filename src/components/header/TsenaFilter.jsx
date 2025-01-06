import { Filter, CheckCircle, XCircle } from "lucide-react";
import { useContext, useState } from "react";
import FilterContext from "../../contexts/FilterProvider";

export default function TsenaFilter() {
  const filterBtn = [
    { name: "All", value: "all", Icon: Filter },
    { name: "Completed", value: "completed", Icon: CheckCircle },
    { name: "Incomplete", value: "incomplete", Icon: XCircle },
  ];

  const { setActiveFilter } = useContext(FilterContext);
  const [activeBtnFilter, setActiveBtnFilter] = useState('all');

  return (
    <div className="flex items-center flex-wrap justify-center">
      {filterBtn.map((btn, index) => (
        <button
          key={index}
          className={`${activeBtnFilter === btn.value ? 'bg-blue-800' : ''} flex  gap-2 bg-blue-600 hover:bg-blue-700 transition-all duration-200 py-2 px-6 rounded-md mx-1 font-medium text-blue-100 my-1`}
          onClick={
            index === 0
              ? () => {
                  setActiveFilter("all");
                  setActiveBtnFilter('all');
                }
              : index === 1
              ? () => {
                  setActiveFilter("completed");
                  setActiveBtnFilter("completed");
                }
              : index === 2
              ? () => {
                  setActiveFilter("incomplete");
                  setActiveBtnFilter("incomplete");
                }
              : undefined
          }
        >
          <btn.Icon />
          {btn.name}
        </button>
      ))}
    </div>
  );
}
