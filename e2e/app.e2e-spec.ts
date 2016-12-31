import { AngularHttpStudyPage } from './app.po';

describe('angular-http-study App', function() {
  let page: AngularHttpStudyPage;

  beforeEach(() => {
    page = new AngularHttpStudyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
