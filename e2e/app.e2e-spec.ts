import { ForecPage } from './app.po';

describe('forec App', function() {
  let page: ForecPage;

  beforeEach(() => {
    page = new ForecPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fc works!');
  });
});
