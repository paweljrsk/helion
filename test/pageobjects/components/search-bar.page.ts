class SearchBarPage {

    get searchInput () { return $("#inputSearch") };
    get searchIcon () { return $("//button[contains(text(), 'Szukaj')]") };
    get suggestPopup () { return $("form#szukanie .suggest-list") };
    get showAllBooksButton () { return $("li.wszystkie p a") }    
    get rodoBtn () { return $(".button #rodo-ok") }
    get notFoundAlert () { return $("div.not-found") }

    async isVisibleSearchBar () {
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
    }

    async clickOnSearchIcon () {
        const icon:WebdriverIO.Element = await this.searchIcon;
        await icon.waitForDisplayed();
        await icon.click();
    }

    async getNotFoundMessage():Promise<string> {
        const message:WebdriverIO.Element = await this.notFoundAlert;
        await message.waitForDisplayed();
        return await message.getText()
    }
}

export default new SearchBarPage();