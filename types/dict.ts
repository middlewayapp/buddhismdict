import { ObjectId } from 'mongodb';

export type Entry = {
  _id: ObjectId;
  word: string;
  definition: string;
};
