import Badge from '@mui/material/Badge';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { logout, updateCart } from "../redux/apiCalls";
import react, {useState} from "react"
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1.2;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
`;

const Logo = styled.h1`
  margin-left: 20px;
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  display: ${(props) => (props.user ? 'none': 'inline')};
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const StyledLink = styled(Link)`
color: black;
text-decoration: none;
margin-right: 10px;

`;


const UserAccount = styled.div`
position : relative;
cursor: pointer;
margin-left: 25px;
display: ${(props) => (props.user ? 'inline': 'none')};
`;
const UserButton = styled.div`
color:#555;
background-color: transparent;
cursor: pointer;
border: none;
`;

const DropdownMenu = styled.div`
background-color: yellow;
position: absolute;
top: 100%;
right: 2px;
background-color: #ffffff;
border: 1px solid #ccc;
width: 170px;
z-index: 9999;
`;
const AccountUser = styled.div`
display: block;
  padding: 10px;
  background-color: AntiqueWhite;
`;
const UserMenuItem = styled.div`
display: block;
padding: 10px;
font-size: 16px;
text-decoration: none;
color: #333;
&:hover{
  background-color: AntiqueWhite;
}
`;





const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector(state=>state.cart.quantity);
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const handleLogout = (e) =>{
      e.preventDefault();
      updateCart(user._id,cart,dispatch)
      logout(dispatch);
    }
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>FR</Language>
        </Left>
        <Center>
          <Logo><StyledLink to ="/" >LE PETIT BAZAR.</StyledLink></Logo>
          <ShoppingBasketIcon/>
        </Center>
        <Right>
          
          <MenuItem  user = {user}> <StyledLink to ="/register" >S'inscrire</StyledLink></MenuItem>
          <MenuItem  user = {user}><StyledLink to ="/login" >Se connecter</StyledLink></MenuItem>
          
          <UserAccount user = {user}>
              <UserButton onClick={toggleDropdown}>
                <AccountCircleIcon/>
              </UserButton>
              {isDropdownOpen && (
              <DropdownMenu>
                <AccountUser>{user.username} <br /> <span style={{ fontSize: "14px" , color:"#555"}}>{user.email}</span> </AccountUser>
                <UserMenuItem > <StyledLink to={"/"}> <PersonOutlineIcon/> Profil </StyledLink></UserMenuItem>
                <UserMenuItem > <SettingsIcon/>   Paramètres</UserMenuItem>
                <UserMenuItem onClick={(e)=>{handleLogout(e)}} > <StyledLink to={"/"}><LogoutIcon/> Se déconnecter</StyledLink></UserMenuItem>
              </DropdownMenu>
               )}
          </UserAccount>

          <StyledLink to={"/cart"}>
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
          </StyledLink>
          
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;