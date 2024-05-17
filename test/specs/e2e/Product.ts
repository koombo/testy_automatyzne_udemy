import { helionHomeUrl, searchProductUrl, cardUrl } from "../../config/pagesUrl";
import SearchBarPage from "../../pages/components/SearchbarPage";
import { searchPhrase, alertText, deletedProduct } from "../../config/data";
import SearchResultPage from "../../pages/SearchResultPage";
import ProductPage from "../../pages/ProductPage";
import CardPage from "../../pages/components/CardPage";

describe("E2E - Products", async () => {
    let productTitle: string = ""; //przypisujemy zmienną globalną między itami
    let price: string = "";
  before(() => {
    browser.url(helionHomeUrl);
    
  }) //zawsze przed wykonaniem testu otworzy stronę


  it("Sholud type search phrase and click search icon", async() => {
    await SearchBarPage.typeSearchPhrase(searchPhrase);
    await SearchBarPage.clickOnSearchIcon();
    await expect(await browser).toHaveUrl(searchProductUrl);
  })

  it("Should click on firts search book", async () => {
    await SearchResultPage.clickOnFirstBook();
    await ProductPage.productTitleIsVisible();
    await ProductPage.addToCartButtonIsVisible();
    productTitle = await ProductPage.getProductTitle();
    price = await ProductPage.getProductPrice();
  })

  it("Should click on add to card button", async() =>{
    await ProductPage.clickAddButton();
    await expect(browser).toHaveUrl(expect.stringContaining(cardUrl));
    await expect(await CardPage.getSuccessAlertValue()).toContain(productTitle);
    await expect( await CardPage.getTotalPrice()).toContain(price);
  })

  it("Should click checkbox and click delete label", async() => {
    await CardPage.clickCheckbox();
    await CardPage.clickDeleteSelectedLabel();
    await expect(await browser.getAlertText()).toContain(alertText);
    await CardPage.acceptDeleteAlert();
    await expect(await CardPage.getdeletedAlertMessage()).toContain(deletedProduct);
  })
})
