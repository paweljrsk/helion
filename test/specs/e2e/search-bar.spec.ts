import { incorrectSearchPhrase, notFoundMessage, searchPhrase, searchResultPageTitle } from "../../config/data";
import { helionHomeUrl, helionSearchUrl, notFoundUrl } from "../../config/page-url"
import searchBarPage from "../../pageobjects/components/search-bar.page";
import SearchBarPage from "../../pageobjects/components/search-bar.page";
import GlobalPage from "../../pageobjects/global.page"
import SearchResultPage from "../../pageobjects/search-result.page";

describe("Searchbar", () => {
    it("Should open helion home page and verify url and visible searchbar", async () => {
        await GlobalPage.openPage(helionHomeUrl, helionHomeUrl);
        await SearchBarPage.isVisibleSearchBar();
    })

    it("Should click search icon and verify url",async () => {
        await SearchBarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(helionHomeUrl);
        await SearchBarPage.rodoBtn.click();
    })

    it("Should type search value and verify popup visibled", async () => {
        await SearchBarPage.searchInput.setValue(searchPhrase)
        await SearchBarPage.suggestPopup.waitForDisplayed()
    })

    it("Should show all books and...", async () => {
        await SearchBarPage.showAllBooksButton.scrollIntoView();
        await browser.pause(1000)
        await SearchBarPage.showAllBooksButton.click();
        await browser.pause(1000)
        await expect(browser).toHaveUrl(helionSearchUrl);
        await browser.pause(1000)
    })

    it("Should verify correctly title and number of books", async () => {
        const title:string = await SearchResultPage.getPageTitle()
        const numberOfBooks:number = await SearchResultPage.getNumberOfBooks()
        await expect(title).toContain(searchResultPageTitle);
        await expect(numberOfBooks).toEqual(20);

    })

    it("Should clear input value", async () => {
        await SearchBarPage.searchInput.clearValue()
        await expect(await searchBarPage.searchInput.getValue()).toContain("")
        await browser.pause()
    })

    it("Should type incorrect book name and verify alert", async () => {
        await SearchBarPage.searchInput.setValue(incorrectSearchPhrase);
        await SearchBarPage.clickOnSearchIcon();
        await expect(await searchBarPage.getNotFoundMessage()).toContain(notFoundMessage)
    })

    it("Should clear input and verify is it null",async () => {
        await SearchBarPage.searchInput.clearValue()
        await browser.pause(500)
        await searchBarPage.searchIcon.click()
        await expect(browser).toHaveUrl(notFoundUrl);
        await expect(await searchBarPage.searchInput.getValue()).toEqual(incorrectSearchPhrase);
    })
})