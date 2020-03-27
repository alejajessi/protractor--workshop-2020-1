import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private addCar: ElementFinder;

  constructor () {
    this.addCar = $('[style*="display: block;"] .button-container > a');
  }

  public async addCarProcess(): Promise<void> {
    await this.addCar.click();
  }
}
