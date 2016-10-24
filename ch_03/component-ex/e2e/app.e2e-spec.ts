import { ComponentExPage } from './app.po';

describe('component-ex App', function() {
  let page: ComponentExPage;

  beforeEach(() => {
    page = new ComponentExPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
