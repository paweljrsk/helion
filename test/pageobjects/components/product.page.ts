class ProductPage {
    get productTitle() { return $("div.title-group h1 span[itemprop='name']") }
    get addToCartBtn() { return $("#addToBasket_vwdtnp_w") }
    get productPrice() { return $("#cena_w") }

    async getProductTitle() {
        const title:WebdriverIO.Element = await this.productTitle;
        await title.waitForDisplayed();
        return title.getText();
    }

    async getProductPrice() {
        const title:WebdriverIO.Element = await this.productPrice;
        await title.waitForDisplayed();
        return title.getText();
    }
}

export default new ProductPage()