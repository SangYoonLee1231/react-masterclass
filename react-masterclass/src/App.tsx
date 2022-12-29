import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(180deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span``;

const EmojiTwo = styled.span``;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotateAnimation} 2s linear infinite;

  ${Emoji} {
    font-size: 36px;

    &:hover {
      font-size: 90px;
    }
    &:active {
      opacity: 0;
    }
  }

  ${EmojiTwo}:hover {
    font-size: 90px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
      <Box>
        <Emoji>🙂</Emoji>
        <EmojiTwo>🙁</EmojiTwo>
      </Box>
    </Wrapper>
  );
}

export default App;
