import { browser, by, element } from 'protractor';

describe('Google Sample Test', () => {
    beforeEach(() => {
        // For non-angular apps
        // turn the synchronization with AngularJS off
        browser.ignoreSynchronization = true;

        browser.get('https://www.google.co.in/');
    });

    it('should have \'Google\' as the title', () => {
        expect(browser.getTitle()).toEqual('Google');
    });
});