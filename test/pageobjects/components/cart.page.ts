class CartPage {
    get successAlert() { return $("div.successbox p") }
    get cartPrice() { return $("#cart-edit-summary") }
    get cartCheckbox() { return $("form#formularz tr th.checkbox") }
    get deleteSelectedProduct() { return $("div#usun a") }
    get deletedAlertMessage() { return $("div.infobox p") }
}

export default new CartPage()