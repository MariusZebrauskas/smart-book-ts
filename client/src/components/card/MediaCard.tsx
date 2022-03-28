import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { MediaCardTypes } from './types';
const HoverCard = styled(Card)`
  transition: all ease-in-out 0.3s;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14),
      0px 8px 42px 7px rgba(0, 0, 0, 0.12);
    transition: box-shadow ease-in-out 0.3s;
    background-color: #f5f5f5;
  }
`;

export default function MediaCard({ data, navigateRoutes }: MediaCardTypes) {
  const cardHandler = () => {
    console.log('Card handler');
  };

  return (
    <HoverCard
      sx={{
        maxWidth: 345,
        minHeight: '20rem',
        mt: '3rem',
        boxShadow: 12,
      }}
      onClick={() => navigateRoutes(`${data.link}`)}
    >
      <CardMedia component='img' height='200' image={data.img} sx={{ objectFit: 'cover' }} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div' sx={{ mt: '3rem' }}>
          {data.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {data.decription}
        </Typography>
      </CardContent>
    </HoverCard>
  );
}
