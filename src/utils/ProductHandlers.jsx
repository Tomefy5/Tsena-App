import { nanoid } from "nanoid/non-secure";

export function UpdateListProductsLS(products) {
    localStorage.setItem("products", JSON.stringify(products));
}

export function GetFormData() {
  const productName = document.getElementById("product-name-field").value;
  const productQuantity = document.getElementById(
    "product-quantity-field"
  ).value;
  const productUnitPrice = document.getElementById(
    "product-unit-price-field"
  ).value;

  const newProduct = {
    id: nanoid(),
    name: productName,
    quantity: productQuantity,
    unitPrice: productUnitPrice,
    collection: "",
    isFinished: false,
  };

  return newProduct;
}


export function InsertNewProduct(formType, setProducts) {
  if (formType !== "createProd") throw new Error("You aren't in create mode");

  const newProduct = GetFormData();
  const previousProducts = JSON.parse(localStorage.getItem("products"));
  const newProducts = [...previousProducts, newProduct];

  localStorage.setItem("products", JSON.stringify(newProducts));
  setProducts(newProducts);
}
