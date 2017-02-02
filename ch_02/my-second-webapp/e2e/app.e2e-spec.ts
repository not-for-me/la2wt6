import { MySecondWebappPage } from './app.po';

describe('my-second-webapp App', function() {
  let page: MySecondWebappPage;

  beforeEach(() => {
    page = new MySecondWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
