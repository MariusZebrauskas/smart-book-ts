import * as React from 'react';
import { Typography } from '@mui/material';
import { Bottom } from './styles';
// import { styled } from '@mui/styles';

export default function BottomFooter() {
  return (
    <Bottom>
      <Typography variant='h5' component='footer'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, et? Nihil, vero! Doloremque
        ducimus neque quia recusandae modi hic autem.
      </Typography>
    </Bottom>
  );
}
