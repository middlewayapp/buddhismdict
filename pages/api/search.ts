import { baseHandler, appendFallbackHandler } from '@/utils/handlers/base';
import { getEntryWords } from 'services/dict';

const handler = baseHandler();

handler.get(async (req, res) => {
  const words = await getEntryWords(req.query.query as string);
  res.status(200).json(words);
});

appendFallbackHandler(handler);

export default handler;
