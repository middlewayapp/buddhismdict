import { Collection } from 'mongodb';
import { getDb } from '@/db/utils';
import { Entry } from '@/types/dict';

export const DICT_COLLECTION_NAME = 'dict';

export const getDictCollection = async (): Promise<Collection<Entry>> => {
  const db = await getDb();
  return db.collection(DICT_COLLECTION_NAME);
};
