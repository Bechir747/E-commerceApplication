  import FacebookIcon from '@mui/icons-material/Facebook';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import MailOutlineIcon from '@mui/icons-material/MailOutline';
  import PhoneIcon from '@mui/icons-material/Phone';
  import PinterestIcon from '@mui/icons-material/Pinterest';
  import RoomIcon from '@mui/icons-material/Room';
  import TwitterIcon from '@mui/icons-material/Twitter';
  import { Link } from 'react-router-dom';
  import styled from "styled-components";
  import { mobile } from "../responsive";
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-right: 10px;

`;



  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>LE PETIT BAZAR.</Logo>
          <Desc>
          Le Petit Bazar est un marché artisanal charmant à Djerba, Tunisie. Il propose une sélection vibrante d'articles faits main tels que l'artisanat, les textiles, la céramique et les bijoux. Les visiteurs peuvent apprécier l'hospitalité chaleureuse et l'ambiance traditionnelle tout en découvrant des souvenirs uniques et en vivant la culture locale.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon color="E60023">
              <PinterestIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Liens utiles</Title>
          <List>
            <ListItem><StyledLink to = '/'>Accueil</StyledLink></ListItem>
            <ListItem><StyledLink to ='/cart'>Panier</StyledLink></ListItem>
            <ListItem><StyledLink to ='/products/homme'>Homme</StyledLink></ListItem>
            <ListItem><StyledLink to ='/products/femme'>Femme</StyledLink></ListItem>
            <ListItem><StyledLink to ='/products/souvenir'>Souvenirs</StyledLink></ListItem>
            <ListItem><StyledLink to ='/'>Mon Compte</StyledLink></ListItem>
            <ListItem><StyledLink to ='/wishlist'>Favoris</StyledLink></ListItem>
            <ListItem><StyledLink to ='/'>Terms</StyledLink></ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <RoomIcon style={{marginRight:"10px"}}/> Rue Sidi Ben Aisi, Midoun, Djerba
          </ContactItem>
          <ContactItem>
            <PhoneIcon style={{marginRight:"10px"}}/> +216 98 903 910
          </ContactItem>
          <ContactItem>
            <MailOutlineIcon style={{marginRight:"10px"}} /> lepetitbazar@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer