const pw = require('playwright');
const fs = require('fs');
const fsPromises = fs.promises;
const cwd = process.cwd();

(async () => {
  const browser = await pw.chromium.launch({
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  // create folder if not exists
  if (!fs.existsSync('./Manual/pdf')) {
    fs.mkdirSync('./Manual/pdf');
  }

  // list files in directory
  const files = fs.readdirSync('./Manual/docs');

  // generating PDF using Playwright with headless chromium
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    if (file.endsWith('.html')) {
      const filename = file.split('.')[0];
      await generatePDF(filename);
    }
  }

  await browser.close();

  async function generatePDF(filename) {
    // convert file path to uri format
    const uri = 'file://' + cwd + '/Manual/docs/' + filename + '.html';
    const file = `./Manual/pdf/${filename}.pdf`;

    process.stdout.write(`Converting ${uri} to ${file} ... `);
    await page.goto(uri);
    await page.pdf({ path: file });
    console.log('done.');
  }
})();
