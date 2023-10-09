import { useState } from "react";
import styled from "styled-components";
import { getCart, login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FAEBD7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #8B0000;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: red;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const currentUserId = useSelector(state => state.user.currentUser?._id);

  const handleClick = async (e) => {
    e.preventDefault();
  
    try {
      const user = await login(dispatch, { username, password });
      const userId = user._id;
  
      await getCart(userId, dispatch);
      
    } catch (error) {
      console.error('Error:', error);
    }
  };



  return (
    <Container>
    <Wrapper>
      <Title>SE CONNECTER</Title>
      <Form>
        <Input
          placeholder="nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="mot de passe"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <Error>Quelque chose s'est mal passé...</Error>}  
        <Button onClick={handleClick} disabled={isFetching}>
          Connecter
        </Button>
        <Link>VOUS NE VOUS SOUVENEZ PAS DU MOT DE PASSE ?</Link>
        <Link to ="/register">CRÉER UN NOUVEAU COMPTE</Link>
        </Form>
    </Wrapper>
  </Container>
  );
};

export default Login;