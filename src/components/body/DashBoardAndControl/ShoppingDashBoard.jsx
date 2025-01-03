import { DollarSign, CreditCard, Briefcase, Wallet, BarChart } from "lucide-react";

const boards = [
  { name: "Initial Money", currentValue: 1000, Icon: Briefcase },
  { name: "Remaining Money", currentValue: 200, Icon: DollarSign },
  { name: "Current Total Expenses", currentValue: 800, Icon: CreditCard },
  { name: "Overall Spending", currentValue: 20000, Icon: BarChart },
  { name: "Current Currency", currentValue: "Ariary", Icon: Wallet },
];

export default function ShoppingDashBoard() {
  return (
    <div className="flex gap-5 justify-center flex-wrap">
      {boards.map((board, index) => (
        <div key={index} className="bg-indigo-200 py-4 px-4 rounded-md">
          <div className="flex gap-2 justify-center items-center">
            <div className="bg-red-300 p-2 rounded-full">
              <board.Icon />
            </div>
            <h3 className="font-medium">{board.name}</h3>
          </div>
          <div className="bg-indigo-100 flex mt-2 rounded items-center justify-center">
            <span className="font-bold text-md lg:text-lg">{board.currentValue}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
