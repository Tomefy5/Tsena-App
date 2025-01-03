import { DollarSign, Coins } from 'lucide-react'; // Option 1

export default function DeviseToggler() {
  const devisesBtn = [
    { devise: "Ariary", value: "ar", Icon: DollarSign },
    { devise: "Franc Malagasy", value: "fmg", Icon: Coins },
  ];

  return (
    <div className="flex items-center flex-wrap justify-center">
      {devisesBtn.map((btn, index) => (
        <button
          key={index}
          className="flex gap-2 bg-blue-500 py-2 px-6 rounded-md mx-1 font-medium text-blue-100 my-3"
        >
          <btn.Icon/> 
          {btn.devise}
        </button>
      ))}
    </div>
  );
}
