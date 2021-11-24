import { baseHandler, appendFallbackHandler } from '@/utils/handlers/base';
import { getEntry } from '@/services/dict';

const handler = baseHandler();

handler.get(async (req, res) => {
  const { word } = req.query;
  const entry = await getEntry(word as string);
  res.status(200).json(entry);
});

appendFallbackHandler(handler);

export default handler;
