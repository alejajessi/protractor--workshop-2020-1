import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private selectTShirt: ElementFinder;

  constructor () {
    this.selectTShirt = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async selectClothes_TShirt(): Promise<void> {
    await this.selectTShirt.click();
  }
}
