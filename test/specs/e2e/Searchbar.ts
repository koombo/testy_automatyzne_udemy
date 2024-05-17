import GlobalPage from "../../pages/GlobalPage"; 
import { helionHomeUrl, notFoundUrl, searchUrl } from "../../config/pagesUrl";
import SearchBarPage from "../../pages/components/SearchbarPage";
import { incorrectSearchPhrase, notFoundMessage, searchPhrase, searchResultTitle } from "../../config/data";
import SearchResultPage from "../../pages/SearchResultPage";

describe("E2E - SearchBar", async() => {
    it("Should open helion home page and verify url and visible search bar", async() => {
        await GlobalPage.openPage(helionHomeUrl, helionHomeUrl);
        await SearchBarPage.searchBarIsVisible();
    })

    // it("Should click on search icon and verify url", async() =>{
    //     await SearchBarPage.clickOnSearchIcon();
    //     await expect(browser).toHaveUrl(helionHomeUrl);

    // })

    it("Should type search value and verify visible of popup", async() => {
        await SearchBarPage.typeSearchPhrase(searchPhrase);
        await browser.pause(500);
        await SearchBarPage.suggestPopupIsVisible();
    })

    it("Should click on see all books button", async() => {
        await SearchBarPage.clickOnSeeAllBooksBtn();
        await browser.pause(500);
        await expect(await browser).toHaveUrl(searchUrl); //musiałam dodać await żeby najpierw wprowadził całą frazę
    })

    it("Should verify visible correctly title and number of books", async() => {
        const title:string = await SearchResultPage.getPageTittle();
        await expect(title).toContain(searchResultTitle);
        const numberOfBooks:number = await SearchResultPage.getNumberOfBooks();
        await expect(numberOfBooks).toBeGreaterThanOrEqual(20); 
    })

    it("Sholud clear input value", async() => {
        await SearchBarPage.clearSearchBar();
        await expect(await SearchBarPage.getInputValue()).toContain("");
    })

    it("Should type incorrect book name and verify alert", async() => {
        await SearchBarPage.typeSearchPhrase(incorrectSearchPhrase);
        await SearchBarPage.clickOnSearchIcon();
        await expect(await SearchBarPage.getNotFoundAlertText()).toContain(notFoundMessage);
    })

    it("Should clear input value and click on search icon", async () =>{
        await SearchBarPage.clearSearchBar();
        //await browser.pause(500); - jeśli chcemy mieć pewność że na pewno wszystko sie wyczysci
        await SearchBarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(notFoundUrl);
        await expect(await SearchBarPage.getInputValue()).toContain("");
    })
})
