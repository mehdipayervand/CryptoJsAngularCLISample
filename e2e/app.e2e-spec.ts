import { CryptoPage } from './app.po';

describe('crypto App', () => {
  let page: CryptoPage;

  beforeEach(() => {
    page = new CryptoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
