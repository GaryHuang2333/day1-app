import { Day1AppPage } from './app.po';

describe('day1-app App', () => {
  let page: Day1AppPage;

  beforeEach(() => {
    page = new Day1AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
