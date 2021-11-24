import { baseHandler, appendFallbackHandler } from '@/utils/handlers/base';
import { queryEntries } from 'services/dict';

const handler = baseHandler();

handler.get(async (req, res) => {
  const entries = await queryEntries(req.query.query as string);
  res.status(200).json(entries);
});

appendFallbackHandler(handler);

export default handler;
