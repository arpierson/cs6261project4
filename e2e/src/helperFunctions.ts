import { browser, by, element } from "protractor";

var resistancePage = function() {

    this.get = function() {
        browser.get('http://localhost:4200/');
    };

    this.elementByName = function(name: string) {
        return element(by.name(name));
    };

    this.elementById = function(name: string) {
        return element(by.id(name));
    };

    this.getText = function(idName: string) {
        return this.elementById(idName).getText();
    };

    this.selectOption = function(selectName: string, option: string) {
        return this.elementByName(selectName).element(by.cssContainingText('option', option)).click();
    };

    this.getOptionValue = function(selectName: string) {
        return this.elementByName(selectName).element(by.css('option:checked')).getText();
    };
};

module.exports = new resistancePage();