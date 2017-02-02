import { UnicliStarterPage } from './app.po';

describe('unicli-starter App', function() {
  let page: UnicliStarterPage;

  beforeEach(() => {
    page = new UnicliStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
