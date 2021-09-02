# html-to-pdf

This is a simple HTML to PDF tool using [Playwright](https://playwright.dev/).

## Usage

1. Download & Install

    ```sh
    git clone https://github.com/doggy8088/html-to-pdf.git
    cd html-to-pdf

    npm install
    ```

2. Put your HTML files to `./Manual/docs` folder.

3. Run this tool

    ```sh
    npm start
    ```

    The PDF output will be located at `./Manual/pdf/` folder.

## Development Notes

1. Initialize package.json

    ```sh
    npm init -y
    ```

2. Install [Playwright](https://playwright.dev/)


    ```sh
    npm i --save playwright

    npx playwright install
    ```

3. Playwright Initialize

    ```js
    const browser = await pw.chromium.launch({ headless: true });

    const context = await browser.newContext();

    const page = await context.newPage();

    // do something ...

    await browser.close();
    ```