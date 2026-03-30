const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(fs.readFileSync('scene-to-brand/dist/index.html'));
  } else if (req.url.startsWith('/assets/')) {
    res.end(fs.readFileSync('scene-to-brand/dist' + req.url));
  }
});
server.listen(3000);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  // Wait for react root
  await page.waitForSelector('#root');
  const content = await page.innerText('#root');
  console.log('App Content:', content);
  await browser.close();
  server.close();
})();
