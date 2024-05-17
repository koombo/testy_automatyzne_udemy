class CardPage{
    
    get successAlert() {
        return $("//p[contains(text(), 'Dodano: ')]");
    }

    get totalPrice(){
        return $("strong#cart-edit-summary > div");
    }

    get checkbox() {
        return $("div#formularz tr th.checkbox");
    }

    get deleteSelectedLabel() {
        return $("div#usun a");
    }

    get deletedAlertMessage() {
        return $("div.infobox > p");
    }

    async getdeletedAlertMessage():Promise<string>{
        const message:WebdriverIO.Element = await this.deletedAlertMessage;
        await message.waitForDisplayed();
        return await message.getText();
    }

    async acceptDeleteAlert(){
        await browser.acceptAlert();

    }
    async clickDeleteSelectedLabel() {
        const clickLabel:WebdriverIO.Element = await this.deleteSelectedLabel;
        await clickLabel.waitForDisplayed();
        await clickLabel.scrollIntoView();
        await clickLabel.click();
    }

    async clickCheckbox() {
        const checkbox:WebdriverIO.Element = await this.checkbox;
        await checkbox.waitForDisplayed();
        await checkbox.scrollIntoView();
        await checkbox.click();
    }

    async getTotalPrice():Promise<string>{
        const price:WebdriverIO.Element = await this.totalPrice;
        await price.waitForDisplayed();
        return await price.getText();
    }

    async getSuccessAlertValue():Promise<string> {
        const success:WebdriverIO.Element = await this.successAlert;
        await success.waitForDisplayed();
        return await success.getText();
    }

}

export default new CardPage();