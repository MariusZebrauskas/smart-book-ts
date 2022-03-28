import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

export const ScreenCenter = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    /* Align all elements in login page nicely */
    margin-left: 0;
  }
`;

export const LinkStyled = styled(Link)`
  color: blue;
  text-decoration: underline;
`;

export const GoogleIcon = styled(FcGoogle)`
  font-size: calc(2rem + 0.1vw);
  &:hover {
    cursor: pointer;
  }
  margin-right: .2rem;
`;
