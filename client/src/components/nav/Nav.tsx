import { Stack, MenuItem, Box, Container } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import { FcWorkflow } from 'react-icons/fc';
import { LinkCenter } from './styles';
import { NavigationTypes } from './types';

const Nav = ({ navigateRoutes }: NavigationTypes) => {
  return (
    <Box
      sx={{
        bgcolor: 'text.primary',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Typography
        className='logo'
        sx={{
          my: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
        variant='h5'
        onClick={() => navigateRoutes('/')}
      >
        <FcWorkflow style={{ margin: '0 1rem 0 0rem', fontSize: '2rem' }} />
        A-Z NOTES
      </Typography>
      <Stack direction={{ sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <MenuItem>
          <Typography
            onClick={() => navigateRoutes('/login')}
            sx={{ color: 'secondary.main' }}
            variant='h6'
          >
            LogIn
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography
            onClick={() => navigateRoutes('/register')}
            sx={{ color: 'info.main' }}
            variant='h6'
          >
            SingUp
          </Typography>
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default Nav;
