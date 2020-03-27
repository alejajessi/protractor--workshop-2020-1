import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private finalButton: ElementFinder;

  constructor () {
    this.finalButton = $('#center_column > div > p > strong');
  }

  public async summaryOrder(text: string): Promise<void> {
    await expect(this.finalButton.getText()).toBe(text);
  }
}
