import AddIcon  from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import {Link} from "react-router-dom"
import {removeProduct, getInitial } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import Command from '../components/Command'
import {addCart, getCart, updateCart} from '../redux/apiCalls'

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  font-size: 16px;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;


const Info = styled.div`
  flex: 2;
  margin-right: 5px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 150px;
  border-radius: 10px 0 0 10px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;


const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 70vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  color: white;
  font-weight: 600;
  background-color: ${(props) => !props.disabled ? "black" : "gray"};
  opacity: ${(props) => !props.disabled ? 1 : 0.8};
  cursor: ${(props) => !props.disabled ? "pointer" : "not-allowed"};
`;

const DeleteButton = styled.button`
height: 40px;
width: 40px;
margin: 10px;
color: white;
background-color: black;
`;
const FromContainer = styled.div`
flex: 3;
height: 70hv;
border: 0.5px solid lightgray;
border-radius: 10px;
margin-right: 5px;
`; 

const StyledLink = styled(Link)`
color: black;
text-decoration: none;
margin-right: 10px;

`;

const ProductContainer = styled.div`
margin-bottom: 5px;
border: 0.5px solid lightgray;
  border-radius: 10px;
`;

const Cart = () => {
  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: 0,
    region: "",
    city: "",
    deliveryMeth: "",
    paymentMeth: "",
  });

  const test = async (e) => {
    e.preventDefault();
    //condition of uncity of the cart one cart of each user
      addCart({
        userId: user._id,
        products: cart.products, 
        quantity: cart.quantity,
        total: cart.total,
      }, dispatch);

  }

  const secondtest = async (e) => {
    e.preventDefault();
      getCart(user._id, dispatch);

  }

  const handleClickRemove = (product) => {
    setQuantity(product.quantity);
    setColor(product.color);
    setSize(product.Size);
    dispatch(
      removeProduct({ ...product, quantity, color, size })
    );
  };

  const handleSubmit = async (e) => {
    if(user){
      e.preventDefault();
      try {
        console.log({
          firstName:formData.firstName,
          lastName:formData.lastName,
          address:formData.address,
          phoneNumber:formData.phoneNumber,
          region:formData.region,
          city:formData.city,
          deliveryMeth:formData.deliveryMeth,
          paymentMeth:formData.paymentMeth,
          amount: cart.total,
          products: cart.products,
          status: "pending"
      })
        const res = await userRequest.post('/orders', {
          firstName:formData.firstName,
          lastName:formData.lastName,
          address:formData.address,
          phoneNumber:formData.phoneNumber,
          region:formData.region,
          city:formData.city,
          deliveryMeth:formData.deliveryMeth,
          paymentMeth:formData.paymentMeth,
          amount: cart.total,
          products: cart.products,
          status: "pending"
      });
        alert("La commande a été reçue avec succès !")
        updateCart(user._id, {
          userId:user._id,
          products: [],
          quantity : 0,
          total: 0
        }, dispatch)
        console.log('order successful:', res.data);
  
        
      } catch (error) {
        console.error('order error:', error);
      }
    }else{
      alert("Pour passer une commande, il est nécessaire de se connecter!")
    }
    
    };


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>VOTRE PANIER</Title>
        <Top>
          <TopButton><StyledLink to="/products">CONTINUER LES ACHATS</StyledLink> </TopButton>
          <TopTexts>
            <TopText><StyledLink to='/whishlist'>Favoris</StyledLink></TopText>
          </TopTexts>
          <TopButton type="filled" onClick={secondtest}>COMMANDER MAINTENAINT</TopButton>
        </Top>
        <Bottom>
        <Info>
            {cart.products.map((product) => (
              <ProductContainer key = {product._id}>
                <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Article:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Taille:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AddIcon />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <RemoveIcon />
                  </ProductAmountContainer>
                  <ProductPrice>
                    {product.price * product.quantity} TND
                  </ProductPrice>
                </PriceDetail>
                <DeleteButton onClick={() => handleClickRemove(product)}><DeleteIcon/></DeleteButton>
              </Product>
              </ProductContainer>
              
            ))}
            
          </Info>
          <FromContainer>
            <Command formData={formData} setFormData={setFormData}/>
        </FromContainer>
          <Summary>
            <SummaryTitle>RÉSUMÉ DU PANIER</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Sous-total</SummaryItemText>
              <SummaryItemPrice>{cart.total} TND</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Livraison estimée</SummaryItemText>
              <SummaryItemPrice> 5.900 TND</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Réduction sur la livraison</SummaryItemText>
              <SummaryItemPrice> -5.900 TND</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice> {cart.total} TND</SummaryItemPrice>
            </SummaryItem>
              <Button disabled ={!(Object.values(formData).every(value => value !== 0 && value !== "" ) && cart.total)}  onClick={handleSubmit}>COMMANDER </Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;