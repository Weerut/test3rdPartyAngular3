import { ThirdPar3Page } from './app.po';

describe('third-par3 App', () => {
  let page: ThirdPar3Page;

  beforeEach(() => {
    page = new ThirdPar3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
