import {
  DollarSign,
  CreditCard,
  Briefcase,
  Wallet,
  BarChart,
} from "lucide-react";

const boards = [
  { name: "Initial Money", currentValue: 1000, Icon: Briefcase, color: "blue" },
  {
    name: "Remaining Money",
    currentValue: 200,
    Icon: DollarSign,
    color: "yellow",
  },
  {
    name: "Current Total Expenses",
    currentValue: 800,
    Icon: CreditCard,
    color: "pink",
  },
  {
    name: "Overall Spending",
    currentValue: 20000,
    Icon: BarChart,
    color: "red",
  },
  {
    name: "Current Currency",
    currentValue: "Ariary",
    Icon: Wallet,
    color: "green",
  },
];

export default function ShoppingDashBoard() {
  return (
    <div className="flex gap-5 justify-center flex-wrap">
      {boards.map((board, index) => (
        <div key={index} className="bg-indigo-200 py-4 px-4 rounded-md">
          <div
            className={`${
              board.color === "blue"
                ? "text-blue-800"
                : board.color === "yellow"
                ? "text-yellow-700"
                : board.color === "pink"
                ? "text-rose-700"
                : board.color === "red"
                ? "text-red-800"
                : "text-green-800"
            } flex gap-2 justify-center items-center`}
          >
            <div
              className={` ${
                board.color === "blue"
                  ? "bg-blue-400 text-blue-700"
                  : board.color === "yellow"
                  ? "bg-yellow-300 text-yellow-600"
                  : board.color === "pink"
                  ? "bg-rose-300 text-rose-500"
                  : board.color === "red"
                  ? "bg-red-400 text-red-700"
                  : "bg-green-400 text-green-700"
              } p-2 rounded-full`}
            >
              <board.Icon />
            </div>
            <h3 className="font-medium">{board.name}</h3>
          </div>
          <div className="bg-indigo-100 flex mt-2 rounded items-center justify-center">
            <span className="font-bold text-md lg:text-lg">
              {board.currentValue}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
