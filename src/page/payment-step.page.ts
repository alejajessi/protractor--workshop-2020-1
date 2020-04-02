import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private checkOutButton: ElementFinder;

  constructor () {
    this.checkOutButton = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async checkOutOnFinishPay(): Promise<void> {
    await this.checkOutButton.click();
  }
}
