import { RainbowWebSdkAngularPage } from './app.po';

describe('rainbow-web-sdk-angular App', function() {
  let page: RainbowWebSdkAngularPage;

  beforeEach(() => {
    page = new RainbowWebSdkAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
