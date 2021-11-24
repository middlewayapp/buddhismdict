import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { UiEntry } from '@/types/dict';

type Props = {
  entry: UiEntry;
};

export function EntryCard({ entry }: Props) {
  return (
    <Card sx={{ width: '100%', mt: 2 }}>
      <CardContent>
        <Typography variant='h5' component='div'>
          {entry.definition}
        </Typography>
        <Typography variant='body2'>dict name</Typography>
      </CardContent>
    </Card>
  );
}
