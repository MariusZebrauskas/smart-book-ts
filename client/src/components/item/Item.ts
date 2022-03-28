import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
// import styled from '@emotion/styled';

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '90%',
  margin: '1rem 1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  
}));
