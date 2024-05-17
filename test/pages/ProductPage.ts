class ProductPage {
    
    get productTitle() {
        return $("div.title-group > h1 > span[itemprop='name']");
    }

    get buttonAdd() {
        return $("#addToBasket_tessam");
    }

    get productPrice() {
        return $("ins#cena_d");
    }


    async getProductPrice():Promise<string> {
        const price:WebdriverIO.Element = await this.productPrice;
        await price.waitForDisplayed();
        return await price.getText();
    }

    async getProductTitle():Promise<string> {
        const title:WebdriverIO.Element = await this.productTitle;
        await title.waitForDisplayed();
        return await title.getText();
    }

    async clickAddButton(){
        const button:WebdriverIO.Element = await this.buttonAdd
        await button.waitForDisplayed();
        await button.click();
    }

    async addToCartButtonIsVisible(){
        const button:WebdriverIO.Element = await this.buttonAdd
        await button.waitForDisplayed();
    }


    async productTitleIsVisible(){
        const title:WebdriverIO.Element = await this.productTitle;
        await title.waitForDisplayed(); //jak tytuł bedzie widoczny to testy przejdą, jak nie to nie przejdą

    }


}

export default new ProductPage();