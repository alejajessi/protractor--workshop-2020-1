import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private finalButton: ElementFinder;

  constructor () {
    this.finalButton = $('#center_column > div > p > strong');
  }

  public async summaryOrder(): Promise<void> {
    await this.finalButton.getText();
  }
}
