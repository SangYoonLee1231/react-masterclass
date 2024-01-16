import { useState } from "react";
import styled from "styled-components";

interface CircleProps {
  bgColor: string; // required
  borderColor?: string; // optional
  text?: string; // optional
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 3px solid ${(props) => props.borderColor};
`;

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  const [counter, serCounter] = useState(1);
  const [value, setValue] = useState<number | string>(1);
  serCounter(2);
  setValue("hello");

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? "white"}>
      {text}
    </Container>
  );
}

export default Circle;
