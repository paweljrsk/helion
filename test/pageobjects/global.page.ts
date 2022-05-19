class GlobalPage {

    openPage(pageUrl:string, expectedPageUrl:string) {
        browser.url(pageUrl);
        expect(browser).toHaveUrl(expectedPageUrl);
    }
}

export default new GlobalPage();