import { SmartDropDownPage } from './app.po';

describe('smart-drop-down App', () => {
  let page: SmartDropDownPage;

  beforeEach(() => {
    page = new SmartDropDownPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
