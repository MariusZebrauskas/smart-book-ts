import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const BoxWithStyles = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  padding-top: calc(10rem + 1vw);
  justify-content: space-around;
  gap: 1rem;
  @media (min-width: 1024px) {
    gap: 4rem;
  }
`;
