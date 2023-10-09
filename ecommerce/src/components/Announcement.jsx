import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #8B0000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super affaire! Livraison gratuite sur les commandes supérieures à 50 DT</Container>;
};

export default Announcement;