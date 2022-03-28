import { Typography } from '@mui/material';
import React from 'react';
import { TopWrapper } from '../../pages/login/styles';
import { TapLOgin } from './types';
const TopLOgin = ({ data }: TapLOgin) => {
  return (
    <TopWrapper>
      <Typography sx={{ mb: 'calc(1rem + .3vw)' }} variant='h5'>
        {data.p1}
      </Typography>
      <Typography variant='subtitle2' sx={{ mb: 'calc(1rem + .3vw)' }}>
        {data.p2}
      </Typography>
    </TopWrapper>
  );
};

export default TopLOgin;
