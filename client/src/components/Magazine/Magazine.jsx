import styled from "styled-components";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Container = styled.div`
  height: 60vh;
  /* background-color: #fcf5f5; */
  background-color: #FFFA69;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 0.05rem;
`;
const Subtitle = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 20px;
`;
const Desc = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 20px;
    text-transform: uppercase;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Magazine = () => {
  return (
    <Container>
      <Title>MAGAZINE</Title>
      <Subtitle>Experience Inspiration</Subtitle>
      <Desc>Get Phenomina Magazine</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <ArrowForwardIcon />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Magazine