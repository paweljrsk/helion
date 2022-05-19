class SearchResultPage {

    get pageTitle () { return $("h1#pageTitle")}
    get booksItem() { return $$("ul.list > li") }
    get firstBookItem() { return $("ul.list li:nth-child(1) a") }

    async getPageTitle():Promise<string> {
        const h1:WebdriverIO.Element = await this.pageTitle;
        await h1.waitForDisplayed();
        return await h1.getText()
    }

    async getNumberOfBooks():Promise<number> {
        const books:WebdriverIO.ElementArray = await this.booksItem;
        return await books.length
    }

}


export default new SearchResultPage();