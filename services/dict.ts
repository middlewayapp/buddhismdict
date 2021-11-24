import { getDictCollection } from '@/db/collection/dict';

export const queryEntries = async (query: string, limit = 30) => {
  const dict = await getDictCollection();
  const queryRegex = new RegExp(`^${query}`);
  return dict
    .find({ word: { $regex: queryRegex } })
    .limit(limit)
    .toArray();
};

export const getEntries = async (word: string) => {
  const dict = await getDictCollection();
  return dict.find({ word }).toArray();
};
