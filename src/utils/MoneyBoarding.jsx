import { defineTotalPriceProduct } from "./SimpleFunctions";

export function CalculateCurrentTotalExpenses(products) {
  let currentTotalExpense = 0;

  products.map((product) => {
    return product.isFinished
      ? (currentTotalExpense += defineTotalPriceProduct(
          product.quantity,
          product.unitPrice
        ))
      : (currentTotalExpense);
  });

  return currentTotalExpense;
}

export function CalculateOverallSpending(products) {
  let totalExpense = 0;

  products.map((product) => {
    return (totalExpense += defineTotalPriceProduct(
      product.quantity,
      product.unitPrice
    ));
  });

  return totalExpense;
}

export function ChangeInitialMoney() {
    const initialMoney = document.getElementById('initial-money-input').value;
    return initialMoney;
}

export function ConvertCurrentMoney(currency, money) {
  return currency === 'fmg'
  ? (money * 5)
  : (money / 5)
}
