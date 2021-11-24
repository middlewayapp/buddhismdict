import { ObjectId } from 'mongodb';

type EntryBase = {
  word: string;
  definition: string;
};

export type BackendEntry = {
  _id: ObjectId;
} & EntryBase;

export type UiEntry = {
  _id: string;
} & EntryBase;
