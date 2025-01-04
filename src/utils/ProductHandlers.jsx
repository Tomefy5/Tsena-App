import { useEffect } from "react";

export function UpdateListProductsLS(products) {
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products))
      }, [products]);
}