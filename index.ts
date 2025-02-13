import Mustache from 'mustache';
import { launch } from 'puppeteer';
import { parseArgs } from 'util';
import template from './template.html' with { type: 'text' };

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

const renderedTemplate = Mustache.render(template, { title: args.values.text })
const browser = await launch();
const page = await browser.newPage();
await page.setContent(renderedTemplate, { waitUntil: 'networkidle0' });
await page.addStyleTag({
  path: './style.css'
});
await page.pdf({ path: args.values.outfile, format: 'A4', displayHeaderFooter: true });
await browser.close();
