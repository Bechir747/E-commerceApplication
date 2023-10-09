import react, {useState} from "react"
import styled from "styled-components";
import { mobile } from "../responsive";
import {publicRequest} from "../requestMethods"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FAEBD7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #8B0000;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    try {
      const response = await publicRequest.post('http://localhost:5000/api/auth/register', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>INFORMATIONS PERSONNELLES</Title>
        <Form onSubmit={handleSubmit}>
        <Input placeholder="nom" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        <Input placeholder="prénom"  type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
        <Input placeholder="nom d'utilisateur"  type="text" name="username" value={formData.username} onChange={handleChange}/>
        <Input placeholder="email"  type="text" name="email" value={formData.email} onChange={handleChange}/>
        <Input placeholder="mot de passe" type="password" name="password" value={formData.password} onChange={handleChange}/>
        <Input placeholder="confirmer le mot de passe"  type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>

          <Agreement>
           J'ai lu et compris la Politique de confidentialité et en matière de cookies.<b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit" >CRÉER UN COMPTE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;