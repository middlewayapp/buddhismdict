import { getDictCollection } from '@/db/collection/dict';

export const getEntries = async (query: string, limit = 30) => {
  const dict = await getDictCollection();
  const queryRegex = new RegExp(`^${query}`);
  return dict
    .find({ word: { $regex: queryRegex } })
    .limit(limit)
    .toArray();
};

export const getEntryWords = async (query: string) => {
  const entries = await getEntries(query);
  return entries.map((entry) => entry.word);
};

export const getEntry = async (word: string) => {
  const dict = await getDictCollection();
  const entry = await dict.findOne({ word });
  return entry;
};
