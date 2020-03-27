import {browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage,
   SummaryStepPage, SignInStepPage, AddressStepPage, ShippingStepPage,
   PaymentStepPage, BankPaymentPage, OrderSummaryPage } from '../src/page';

describe('Buy a t-shirt', () => {

  const email: string  = 'aperdomobo@gmail.com';
  const password: string = 'WorkshopProtractor';
  const textConfirmation: string = 'Your order on My Store is complete.';

  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const producAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage : SummaryStepPage = new SummaryStepPage();
  const signInStepPage : SignInStepPage = new SignInStepPage();
  const addressStepPage : AddressStepPage = new AddressStepPage();
  const shippingStepPage : ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage : BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage : OrderSummaryPage = new OrderSummaryPage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(30000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.selectClothes_TShirt();
    await(browser.sleep(3000));
    await producAddedModalPage.addCarProcess();
    await(browser.sleep(3000));
    await summaryStepPage.checkOutSignIn();
    await(browser.sleep(3000));

    await signInStepPage.writeEmail(email);
    await signInStepPage.writePassword(password);
    await signInStepPage.continueToLogin();
    await(browser.sleep(3000));

    await addressStepPage.checkOuttoShipping();
    await(browser.sleep(3000));

    await shippingStepPage.confirmSpace();
    await(browser.sleep(3000));

    await shippingStepPage.continueToPay();
    await(browser.sleep(3000));
    await paymentStepPage.checkOuttoFiniishPay();
    await(browser.sleep(3000));
    await bankPaymentPage.checkOuttoFinish();
    await(browser.sleep(3000));

    await orderSummaryPage.summaryOrder(textConfirmation);
  });
});
