import { Stack } from '@mui/material';
import React, { useState } from 'react';
import { Search } from '@/screens/Dict/components/Search';
import { useEntries } from '@/screens/Dict/data';
import { EntryCard } from '@/screens/Dict/components/EntryCard';

export const Dict = () => {
  const [word, setWord] = useState('');
  const { entries } = useEntries(word);

  return (
    <Stack alignItems='center' sx={{ padding: 3 }}>
      <Search
        onSelect={(val) => {
          setWord(val);
        }}
      />
      {entries.map((entry) => {
        return <EntryCard entry={entry} key={entry._id} />;
      })}
    </Stack>
  );
};
