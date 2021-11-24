// use jest as script runner
import { getDictCollection } from '@/db/collection/dict';
import { ObjectId } from 'bson';
import { XMLParser } from 'fast-xml-parser';
import fs from 'fs';
import path from 'path';

test.skip('parse xml for A Chinese Translation of A.P. Buddhadatta\'s "Concise Pali-English Dictionary"', async () => {
  const dict = await getDictCollection();
  const dictName = `A Chinese Translation of A.P. Buddhadatta's "Concise Pali-English Dictionary"`;

  const file = fs.readFileSync(
    path.resolve(__dirname, 'assets', 'pali-chin.dila.tei.p4.xml'),
    'utf-8'
  );

  const parser = new XMLParser();
  const jObj = parser.parse(file);

  await dict.deleteMany({});
  for (const obj of jObj['TEI.2'].text.body.div) {
    const { entry: entries } = obj;
    if (Array.isArray(entries)) {
      for (const entry of entries) {
        const { form: word, sense: definition } = entry;
        await dict.insertOne({
          _id: new ObjectId(),
          word,
          definition,
          dictName,
        });
      }
    } else {
      const entry = entries;
      const { form: word, sense: definition } = entry;
      await dict.insertOne({
        _id: new ObjectId(),
        word,
        definition,
        dictName,
      });
    }
  }
  console.log('done1');
});
