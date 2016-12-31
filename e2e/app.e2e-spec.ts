import { DogsPage } from './app.po';

describe('dogs App', function() {
  let page: DogsPage;

  beforeEach(() => {
    page = new DogsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
