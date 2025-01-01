export default function DeviseToggler() {
  const devisesBtn = [
    { devise: "Ariary", value: "ar" },
    { devise: "Franc Malagasy", value: "fmg" },
  ];

  return (
    <div className="flex items-center flex-wrap justify-center">
      {devisesBtn.map((btn, index) => (
        <button
          key={index}
          className="bg-blue-500 py-2 px-6 rounded-md mx-1 font-medium text-blue-100 my-3"
        >
          {btn.devise}
        </button>
      ))}
    </div>
  );
}
