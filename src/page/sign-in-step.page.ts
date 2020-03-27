import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailSpace: ElementFinder;
  private passwSpace: ElementFinder;
  private check: ElementFinder;

  constructor () {
    this.emailSpace = $('#email');
    this.passwSpace = $('#passwd');
    this.check = $('#SubmitLogin > span');
  }

  public async writeEmail(email: string): Promise<void> {
    await this.emailSpace.sendKeys(email);
  }

  public async writePassword(password: string): Promise<void> {
    await this.passwSpace.sendKeys(password);
  }

  public async continueToLogin(): Promise<void> {
    await this.check.click();
  }
}
