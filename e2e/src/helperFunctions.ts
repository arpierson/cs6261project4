import { browser, by, element } from "protractor";

var resistancePage = function() {

    this.get = function() {
        browser.get('http://localhost:4200/');
    };

    this.elementByName = function(name: string) {
        return element(by.name(name));
    };

    this.getText = function(name: string) {
        return this.elementByName(name).getText();
    };

    this.selectOption = function(selectName: string, option: string) {
        return this.elementByName(selectName).element(by.cssContainingText('option', option)).click();
    };
};

module.exports = new resistancePage();