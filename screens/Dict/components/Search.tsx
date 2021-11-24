import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useWordSearch } from '@/screens/Dict/data';

type Props = {
  onSelect: (val: string) => void;
};

export function Search({ onSelect }: Props) {
  const [query, setQuery] = React.useState('');
  const { words, isLoadingWords } = useWordSearch(query);
  const [open, setOpen] = React.useState(false);

  return (
    <Autocomplete
      sx={{ minWidth: '100%' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      filterOptions={(x) => x}
      isOptionEqualToValue={(option, value) => option === value}
      getOptionLabel={(option) => option}
      options={words}
      onChange={(_, value) => {
        // when user choose a selection in the dropdown
        onSelect(value);
      }}
      loading={isLoadingWords}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Asynchronous'
          InputProps={{
            ...params.InputProps,
            onChange: (e) => {
              setQuery(e.target.value);
            },
            endAdornment: (
              <React.Fragment>
                {isLoadingWords ? <CircularProgress color='inherit' size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
