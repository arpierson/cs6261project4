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

    it('should display the default resistance before setting any colors', () => {
      expect(resistancePage.getText('resistanceMessage')).toEqual('Resistance: 0 +/- 1%');
      expect(resistancePage.getOptionValue('digits1')).toEqual('black');
      expect(resistancePage.getOptionValue('digits2')).toEqual('black');
      expect(resistancePage.getOptionValue('digits3')).toEqual('black');
      expect(resistancePage.getOptionValue('multiplier')).toEqual('black');
      expect(resistancePage.getOptionValue('tolerance')).toEqual('brown');
    });

    it('should set three digit colors, one multiplier color, and one tolerance color, and calculate resistance and tolerance', () => {
      resistancePage.selectOption('digits1', 'red');
      resistancePage.selectOption('digits2', 'yellow');
      resistancePage.selectOption('digits3', 'grey');
      resistancePage.selectOption('multiplier', 'brown');
      resistancePage.selectOption('tolerance', 'violet');
      expect(resistancePage.getText('resistanceMessage')).toEqual('Resistance: 2480 +/- 0.1%');
    });

    it('should set three digit colors, one multiplier color, and one tolerance color in any order, and calculate resistance and tolerance', () => {
      resistancePage.selectOption('tolerance', 'violet');
      resistancePage.selectOption('digits2', 'yellow');
      resistancePage.selectOption('multiplier', 'brown');
      resistancePage.selectOption('digits1', 'red');
      resistancePage.selectOption('digits3', 'grey');
      expect(resistancePage.getText('resistanceMessage')).toEqual('Resistance: 2480 +/- 0.1%');
    });
  });
});
