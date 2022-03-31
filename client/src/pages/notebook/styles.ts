import styled from '@emotion/styled';

import { Typography } from '@mui/material';

type TextStyle = {
  line: string;
};

export const TypographyStyled = styled(Typography)<TextStyle>`
  text-decoration-line: ${(props) => (props.line === 'line ON' ? 'line-through' : 'none')};
  margin-left: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
