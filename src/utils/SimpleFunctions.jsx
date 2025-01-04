export const defineTotalPriceProduct = (quantity, unitPrice) => {
    return quantity * unitPrice;
}

export const setTitle = (el, newTitle) => {
    el.innerText = newTitle
}