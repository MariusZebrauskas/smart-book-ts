import styled from '@emotion/styled';
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
export const Wrapper = styled.div`
  width: 25rem;
  max-width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const GoogleIcon = styled(FcGoogle)`
  font-size: calc(2rem + 0.1vw);
  &:hover {
    cursor: pointer;
  }
`;
