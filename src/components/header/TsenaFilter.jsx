export default function TsenaFilter() {
  const filterBtn = [
    { name: "All", value: "all" },
    { name: "Completed", value: "completed" },
    { name: "Incomplete", value: "incomplete" },
  ];

  return (
    <div className="flex items-center flex-wrap justify-center">
      {filterBtn.map((btn, index) => (
        <button
          key={index}
          className="bg-blue-700 py-2 px-6 rounded-md mx-1 font-medium text-blue-100 my-1"
        >
          {btn.name}
        </button>
      ))}
    </div>
  );
}
