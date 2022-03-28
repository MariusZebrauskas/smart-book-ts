import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { cards } from './obj';
import BottomFooter from '../../components/bottom/BottomFooter';
import { BoxWithStyles } from './styles';
import { Link } from 'react-router-dom';
import { HomeTypes } from './types';

const Home = ({ navigateRoutes }: HomeTypes) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: '12vh', flexDirection: 'column' }}>
      <Typography sx={{ fontSize: 'calc(3rem + 1vw)', textAlign: 'center' }} variant='h1'>
        Best to-do app for personal task management
      </Typography>
      <Typography
        sx={{ textAlign: 'center', marginTop: '2rem', color: 'text.secondary' }}
        variant='h5'
      >
        A-Z NOTES makes it easier to plan tasks by using online to-do list!
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Button color='secondary' variant='contained' onClick={() => navigateRoutes('/register')}>
          <Typography variant='h6' sx={{ padding: '.5rem 1.3rem', fontSize: 'calc(1rem + .1vw)' }}>
            SignUp!
          </Typography>
        </Button>
      </Box>
      <BoxWithStyles>
        {/* display cards */}
        {cards.map((card) => {
          return (
            <Paper key={card.id} elevation={12} sx={{ padding: '2rem', width: '25rem' }}>
              <Typography variant='h4'>{card.header}</Typography>
              <Typography
                variant='h6'
                sx={{ fontWeight: '500', color: 'text.secondary', marginTop: '2rem' }}
              >
                {card.p1}
              </Typography>
              <Typography
                variant='h6'
                sx={{ fontWeight: '500', color: 'text.secondary', marginTop: '1rem' }}
              >
                {card.p2}
              </Typography>
              <Typography
                variant='h6'
                sx={{ fontWeight: '500', color: 'text.secondary', marginTop: '1rem' }}
              >
                {card.p3}
              </Typography>
            </Paper>
          );
        })}
      </BoxWithStyles>

      <BottomFooter />
    </Box>
  );
};

export default Home;
