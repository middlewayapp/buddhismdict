import { UiEntry } from '@/types/dict';
import { getRequest } from '@/utils/api';
import { useQuery } from 'react-query';
import { uniq } from 'ramda';

export const useWordSearch = (query: string) => {
  const {
    data: words = [],
    isLoading: isLoadingWords,
    ...rest
  } = useQuery(
    ['words', query],
    async () => {
      const entries = await getRequest<[UiEntry]>('/api/search?query=' + query);
      const words = entries.map((entry) => entry.word);
      return uniq(words);
    },
    {
      useErrorBoundary: true,
      retry: false,
    }
  );

  return {
    words,
    isLoadingWords,
    ...rest,
  };
};

export const useEntries = (word: string) => {
  const {
    data: entries = [],
    isLoading: isLoadingEntries,
    ...rest
  } = useQuery(
    ['entries', word],
    async () => {
      const entries = await getRequest<[UiEntry]>(`/api/entries/${word}`);
      return entries;
    },
    {
      useErrorBoundary: true,
      retry: false,
    }
  );

  return {
    entries,
    isLoadingEntries,
    ...rest,
  };
};
