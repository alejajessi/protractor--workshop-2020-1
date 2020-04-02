import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private checkOutButton: ElementFinder;

  constructor () {
    this.checkOutButton = $('#cart_navigation > button > span');
  }

  public async checkOuttoFinish(): Promise<void> {
    await this.checkOutButton.click();
  }
}
