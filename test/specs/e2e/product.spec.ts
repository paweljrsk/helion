import { alertMessage, deletedProductMessage, searchPhrase } from "../../config/data"
import { cartUrl, helionHomeUrl, searchProductrUrl } from "../../config/page-url"
import cartPage from "../../pageobjects/components/cart.page"
import productPage from "../../pageobjects/components/product.page"
import searchBarPage from "../../pageobjects/components/search-bar.page"
import searchResultPage from "../../pageobjects/search-result.page"

describe("E2E - Products",async () => {
    let productTitle:string = "";
    let productPrice:string = "";

    before(() => {
        browser.url(helionHomeUrl)
    })
    
    it("Should type input search and click search icon",async () => {
        await searchBarPage.searchInput.setValue(searchPhrase);
        await searchBarPage.searchIcon.click();
        await expect(browser).toHaveUrl(searchProductrUrl);
    })

    it("Should click on first book",async () => {
        await searchResultPage.firstBookItem.click();
        await productPage.productTitle.waitForDisplayed()
        await productPage.addToCartBtn.waitForDisplayed()
        productTitle = await productPage.getProductTitle();
        productPrice = await productPage.getProductPrice();
    })

    it("Should click on add to cart button",async () => {
        await productPage.addToCartBtn.scrollIntoView();
        await productPage.addToCartBtn.click()
        await expect(browser).toHaveUrlContaining(cartUrl)
        await expect(await cartPage.successAlert.getText()).toContain(productTitle);
        await expect(await cartPage.cartPrice.getText()).toEqual(productPrice);
    })

    it("Should click checkbox and delete products",async () => {
        await cartPage.cartCheckbox.scrollIntoView();
        await cartPage.cartCheckbox.click();
        await cartPage.deleteSelectedProduct.click();
        await expect(await browser.getAlertText()).toContain(alertMessage);
        await browser.acceptAlert();
        await expect(await cartPage.deletedAlertMessage.getText()).toEqual(deletedProductMessage);
        await browser.pause(3000)
    })
})