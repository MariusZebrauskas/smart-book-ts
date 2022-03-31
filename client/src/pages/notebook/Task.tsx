import React, { useState } from 'react';
import { TypographyStyled } from './styles';

type TaskProps = {
  children: {
    id?: number;
    task?: string;
  };
};

const Task = ({ children }: TaskProps): JSX.Element => {
  const [line, setLine] = useState("line OFF");

  return (
    <TypographyStyled
      onClick={() => setLine(line === "line ON" ?  "line OFF" : "line ON")}
      line={line}
      variant='h6'
    >
      {children}
    </TypographyStyled>
  );
};

export default Task;
