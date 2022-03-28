import React from 'react';
import moment from 'moment';
import { Box, Typography } from '@mui/material';
import MediaCard from '../../components/card/MediaCard';
import { obj } from './obj';
import { DasboardTypes } from './types';
const Dashbord = ({ user, navigateRoutes }: DasboardTypes) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        mt: '5rem',
      }}
    >
      <Typography variant='h4'>
        Hello, {user.name} today is {moment().format('dddd')}, {moment().format('MMMM Do')}
      </Typography>
      <Typography variant='h5' sx={{ mt: '2rem' }}>
        Pick one of the falowing options to manage your tasks
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          mt: '5rem',
          width: '100%',
          maxWidth: '80rem',
        }}
      >
        {obj.map((item) => (
          <MediaCard key={item.id} data={item} navigateRoutes={navigateRoutes} />
        ))}
      </Box>
    </Box>
  );
};

export default Dashbord;
