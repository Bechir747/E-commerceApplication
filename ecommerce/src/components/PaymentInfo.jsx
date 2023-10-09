import React from 'react'
import styled from "styled-components";

const OtherContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Input = styled.input`
width: 3%;
margin-left: 20px;
cursor: pointer;
background-color: DarkRed;
border-color: DarkRed;
`;
const ChoiceContainer = styled.div`
width: 90%;
height: 60hv;
padding: 10px;
`;

const Header = styled.div`
padding: 10px;
font-size: 20px;
`;

const Choice = styled.div`
margin-left : 20px;
padding: 20px;
font-size: 16px;
`;


const Select = styled.label`
width: 80%;
display: flex;
`;


export const PaymentInfo = ({formData, setFormData}) => {
  return (
    <OtherContainer>
      <ChoiceContainer>
        <Header>Paiement a la livraison</Header>
        <Select>

            <Input type="radio" name="remember" value="afterDelivery" onClick={event=>setFormData({...formData, paymentMeth:event.target.value})}/>
            <Choice>Paiement CASH a la livraison</Choice>
        </Select>
      </ChoiceContainer>
      <hr style = {{color:"gray",  size:"3" , width:"90%"}}/>
      <ChoiceContainer>
        <Header> Paiement par carte bancaire</Header>
        <Select>
            <Input type="radio" name="remember" value="online" onClick={event=>setFormData({...formData, paymentMeth:event.target.value})}/>
            <Choice>Payez en ligne maintenant !</Choice>
        </Select>
      </ChoiceContainer>
    </OtherContainer>
  )
}

export default PaymentInfo;