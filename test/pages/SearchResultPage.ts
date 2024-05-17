class SearchResultPage {
    get pageTitle(){
        return $("div#page-title >h1");
    }

    async getPageTittle():Promise<string> {
        const h1:WebdriverIO.Element = await this.pageTitle;
       await h1.waitForDisplayed(); 
       return await h1.getText();
    }

    get bookItem(){
        return $$("ul.list >li");  // podwójny dolar zwraca wszystkie elementy tej klasy
    }

    get firstBookItem() {
        return $("ul.list > li:nth-child(1) > a"); //nth-child(1) oznacza wybranie pierwszego z listy tych co spełniają wymagania
    }

    async clickOnFirstBook() {
        const book1:WebdriverIO.Element = await this.firstBookItem;
        await book1.waitForDisplayed();
        await book1.click();
    }

    async getNumberOfBooks():Promise<number> {
        const books:WebdriverIO.ElementArray = await this.bookItem;
        return await books.length;  //ta metoda zwraca liczbę obiektów spełniających te kryteria czyli będących bookItem
    }

}

export default new SearchResultPage();