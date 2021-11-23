// use jest as script runner
import { XMLParser } from 'fast-xml-parser';
import fs from 'fs';
import path from 'path';

test('parse xml', () => {
  const file = fs.readFileSync(
    path.resolve(__dirname, 'assets', 'pali-chin.dila.tei.p4.xml'),
    'utf-8'
  );

  const parser = new XMLParser();
  const jObj = parser.parse(file);
  console.log(jObj);
});
