import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private checkOut: ElementFinder;

  constructor () {
    this.checkOut = $('.cart_navigation span');
  }

  public async checkOutSignIn(): Promise<void> {
    await this.checkOut.click();
  }
}
