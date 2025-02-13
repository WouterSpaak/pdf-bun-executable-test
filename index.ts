import { launch } from 'puppeteer';
import { parseArgs } from 'util';


const args = parseArgs({
  args: Bun.argv,
  options: {
    text: {
      type: 'string'
    },
    outfile: {
      type: 'string',
      default: 'file.pdf'
    }
  },
  allowPositionals: true
});

const browser = await launch();
const page = await browser.newPage();
await page.setContent(`<h1 class="styled-header">${args.values.text}</h1>`, { waitUntil: 'networkidle0' });
await page.addStyleTag({
  path: './style.css'
});
await page.pdf({ path: args.values.outfile, format: 'A4', displayHeaderFooter: true });
await browser.close();
