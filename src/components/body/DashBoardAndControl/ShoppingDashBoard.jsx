import {
  DollarSign,
  CreditCard,
  Briefcase,
  Wallet,
  BarChart,
} from "lucide-react";
import {
  CalculateCurrentTotalExpenses,
  CalculateOverallSpending,
  ChangeInitialMoney,
  ConvertCurrentMoney,
} from "../../../utils/MoneyBoarding";
import { useContext, useEffect, useState } from "react";
import CurrencyContext from "../../../contexts/CurrencyProvider";

export default function ShoppingDashBoard({ currentListProducts }) {
  const overallSpending = CalculateOverallSpending(currentListProducts);
  const currentTotalExpenses =
    CalculateCurrentTotalExpenses(currentListProducts);
  const [initialMoney, setInitialMoney] = useState(0);
  const [remainingMoney, setRemainingMoney] = useState(0);
  const { currency } = useContext(CurrencyContext);

  useEffect(() => {
    setInitialMoney(ConvertCurrentMoney(currency, initialMoney))
  },[currency])

  useEffect(() => {
    setRemainingMoney(initialMoney - currentTotalExpenses);
  }, [initialMoney, currentTotalExpenses]);

  const boards = [
    {
      name: "Initial Money",
      currentValue: initialMoney,
      Icon: Briefcase,
      color: "blue",
    },
    {
      name: "Remaining Money",
      currentValue: remainingMoney,
      Icon: DollarSign,
      color: "yellow",
    },
    {
      name: "Current Total Expenses",
      currentValue: currentTotalExpenses,
      Icon: CreditCard,
      color: "pink",
    },
    {
      name: "Overall Spending",
      currentValue: overallSpending,
      Icon: BarChart,
      color: "red",
    },
    {
      name: "Current Currency",
      currentValue: currency === "ariary" ? "Ariary" : "Fmg",
      Icon: Wallet,
      color: "green",
    },
  ];

  return (
    <div className="flex gap-5 justify-center flex-wrap">
      {/* {console.log(overallSpending)} */}
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
            {index === 0 ? (
              <input
                id="initial-money-input"
                type="number"
                className="font-bold text-md lg:text-lg bg-indigo-100 rounded text-center w-44"
                value={initialMoney}
                onChange={() => {
                  setInitialMoney(ChangeInitialMoney());
                }}
              />
            ) : (
              <span className="font-bold text-md lg:text-lg">
                {board.currentValue}
              </span>
            )}
          </div>
          {console.log(initialMoney)}
        </div>
      ))}
    </div>
  );
}
