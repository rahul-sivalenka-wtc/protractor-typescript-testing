import { Config } from 'protractor';
import { SpecReporter } from "jasmine-spec-reporter";
import { CustomReporter } from 'jasmine';

export let config: Config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    specs: [
        'specs/spec.js'
    ],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--start-maximized']
        }
    },
    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
        print: function () {
            // Need to override this in order to remove the default reporter dots
        }
    },
    onPrepare: () => {
        // Adding a custom jasmine reporter 
        // Ref: 
        //  - https://github.com/bcaudan/jasmine-spec-reporter/blob/master/examples/protractor/protractor.conf.js
        //  - https://github.com/bcaudan/jasmine-spec-reporter/blob/master/examples/typescript/spec/helpers/jasmine-runner.ts

        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }) as CustomReporter);
    }
};