import React, { useState } from 'react';
import { TypographyStyled } from './styles';

type TaskProps = {
  children: {
    id?: number;
    task?: string;
  };
};

const Task = ({ children }: TaskProps) => {
  const [textWithLine, setTextWithLine] = useState(false);

  return (
    <TypographyStyled
      onClick={() => setTextWithLine(!textWithLine)}
      textWithLine={textWithLine}
      variant='button'
    >
      {children}
    </TypographyStyled>
  );
};

export default Task;
