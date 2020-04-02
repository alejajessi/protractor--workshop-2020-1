import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private confirmButton: ElementFinder;
  private  methodPay : ElementFinder;

  constructor () {
    this.confirmButton = $('#cgv');
    this.methodPay = $('#form > p > button > span');
  }

  public async confirmSpace(): Promise<void> {
    await this.confirmButton.click();
  }

  public async continueToPay(): Promise<void> {
    await this.methodPay.click();
  }
}
