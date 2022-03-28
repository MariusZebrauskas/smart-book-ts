import styled from '@emotion/styled';

import { Typography } from '@mui/material';

type TextStyle = {
  textWithLine: boolean;
};

export const TypographyStyled = styled(Typography)<TextStyle>`
  text-decoration-line: ${(props) => (props.textWithLine ? 'line-through' : 'none')};
  margin-left: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
