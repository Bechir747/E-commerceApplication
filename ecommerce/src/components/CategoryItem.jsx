import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from 'react-router-dom'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  ${mobile({ height: "20vh" })}
  background-color: ${props => props.color};
`;


const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;
const StyledLink = styled(Link)`
color: black;
text-decoration: none;
margin-right: 10px;

`;

const CategoryItem = ({ item }) => {
  return (
    <Container color = {item.img}>
      <Info>
        <Title>{item.title}</Title>
        <Button><StyledLink  to ={"/products/"+item.cat}>Découvrons</StyledLink></Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;