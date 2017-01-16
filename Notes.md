# General Notes
* Compile the *.ts* files using 
    ```shell
    tsc
    ```
* Can watch the changes by specifying `rootDir` in **tsconfig.json** and by running
    ```shell
    tsc -w
    ```

# Issues faced and solutions
* Cannot find name 'Promise'

    **Sol**: 
    Add the following to `tsconfig.json` under `compilerOptions` node
    ```javascript
    "lib": ["es2015", "dom"]
    ```

* Cannot run the protractor tests

    **Sol**:
    * Check if the selenium server is running. If not run it using the following command
        ```shell
        webdriver-manager start
        ```
    * If the tests fail with **session not created exception** make sure selenium server is stopped and do the following
        ```shell
        npm update protractor
        webdriver-manager update
        webdriver-manager start
        ```
* Error while waiting for Protractor to sync with the page: "window.angular is undefined.

    **Sol**:
    If it is a non-angular app, ignore the angular sync by placing the following code in beforeEach block
    ```javascript
    browser.ignoreSynchronization = true;
    browser.get('your/url');
    ```