import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

var resistancePage = require('./helperFunctions');

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to Resistance Calculator!');
  });

  describe('Expected successful use of app', () => {
    beforeEach(function() {
      resistancePage.get();
    });

    it('should set three digit colors, one multiplier color, and one tolerance color, and calculate resistance and tolerance', () => {
      resistancePage.selectOption('digits1', 'red');
      resistancePage.selectOption('digits2', 'yellow');
      resistancePage.selectOption('digits3', 'grey');
      resistancePage.selectOption('multiplier', 'brown');
      resistancePage.selectOption('tolerance', 'violet');
      expect(resistancePage.getText('resistanceMessage')).toEqual('Resistance: 2480 +/- 0.1%');
    });
  });
});
