class SearchBarPage {
    get searchInput() {
        return $("#inputSearch");
    }

    get searchIcon() {
        return $("//button[contains(text(), 'Szukaj')]");
    }

    get suggestPopup() {
        return $("form#szukanie div.suggest-list");
    }

    get seeAllBooksBtn(){
        return $("li.wszystkie > p > a");
    }

    get notFoundAlert(){
        return $("div.not-found");
    }

        async searchBarIsVisible(){
            const input:WebdriverIO.Element = await this.searchInput;
            await input.waitForDisplayed(); //metoda czeka aż input będzie widoczny
        }

        async clickOnSearchIcon(){
            const icon:WebdriverIO.Element = await this.searchIcon;
            await icon.waitForDisplayed();
            await icon.click();
        }

        async typeSearchPhrase(value:string){
            const input:WebdriverIO.Element = await this.searchInput;
            console.log(value);
            await input.waitForDisplayed();
            await input.setValue(value);
        }

        async suggestPopupIsVisible(){
            const input2:WebdriverIO.Element = await this.suggestPopup;
            await input2.waitForDisplayed();
        }

        async clickOnSeeAllBooksBtn(){
            const bnt:WebdriverIO.Element = await this.seeAllBooksBtn;
            await bnt.waitForDisplayed();
            await bnt.scrollIntoView();
            await bnt.click();
        }

        async clearSearchBar() {
            const input:WebdriverIO.Element = await this.searchInput;
            await input.waitForDisplayed();
            await input.clearValue();
        }

        async getInputValue():Promise<string> {
            const input3:WebdriverIO.Element = await this.searchInput;
            await input3.waitForDisplayed();
            return await input3.getValue();
        }

        async getNotFoundAlertText():Promise<string> {
            const alert:WebdriverIO.Element = await this.notFoundAlert;
            await alert.waitForDisplayed();
            return await alert.getText();
        }
    
}



export default new SearchBarPage();