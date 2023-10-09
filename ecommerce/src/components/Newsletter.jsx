import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-image: url("/public/newsletterfokhar.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  flex: 1;
  border-color: white;
  background-color: #8B0000;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Abonnez-vous à notre newsletter.</Desc>
      <InputContainer>
        <Input placeholder="E-mail" />
        <Button>
        <SendOutlinedIcon></SendOutlinedIcon>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;