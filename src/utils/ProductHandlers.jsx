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

export function SetProductInfoToForm(productInfos) {
  const productNameField = document.getElementById("product-name-field");
  const productQuantityField = document.getElementById(
    "product-quantity-field"
  );
  const productUnitPriceField = document.getElementById(
    "product-unit-price-field"
  );
  productNameField.value = productInfos.name;
  productQuantityField.value = productInfos.quantity;
  productUnitPriceField.value = productInfos.unitPrice;
}

export function SaveEditedProduct(id, setProducts) {
  setProducts((prevProducts) => {
    const productName = document.getElementById("product-name-field").value;
    const productQuantity = document.getElementById(
      "product-quantity-field"
    ).value;
    const productUnitPrice = document.getElementById(
      "product-unit-price-field"
    ).value;

    return prevProducts.map((product) =>
      product.id === id
        ? {
            ...product,
            name: productName,
            quantity: productQuantity,
            unitPrice: productUnitPrice,
          }
        : product
    );
  });
}

export function IsFinishedHandler(id, setProducts) {
  setProducts((prevProducts) =>
    prevProducts.map((product) =>
      product.id === id
        ? { ...product, isFinished: !product.isFinished }
        : product
    )
  );
}

export function DeleteProductHandler(id, setProducts) {
  setProducts((prevProducts) => (
    prevProducts.filter(product => product.id !== id)
  ));
}
