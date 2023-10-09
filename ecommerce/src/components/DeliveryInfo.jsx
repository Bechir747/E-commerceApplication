import React from 'react'
import styled from "styled-components";

const PersonalContainer = styled.div`
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



const Choice = styled.div`
margin-left : 20px;
padding: 20px;
font-size: 16px;
`;


const Select = styled.label`
width: 80%;
display: flex;
`;

const InputText = styled.input`
width: 35%;
display: flex;
margin: 20px;
padding: 10px;
`;



export const DeliveryInfo = ({formData, setFormData}) => {
  return (
    <PersonalContainer>
     <ChoiceContainer>
        <Select>

            <Input type="radio" name="remember" value="PointRelais" onClick={event=>setFormData({...formData, deliveryMeth:event.target.value})} />
            <Choice>Point Relais (a partir de 3 TND) Livrason entre 2 ou 3 apres la confirmation</Choice>
        </Select>
      </ChoiceContainer>
      <hr style = {{color:"gray",  size:"3" , width:"90%"}}/>
      <ChoiceContainer>
        <Select>
            <Input type="radio" name="remember" value="LivraisonDomicile" onClick={event=>setFormData({...formData, deliveryMeth:event.target.value})}/>
            <Choice>Livraison a domicile (a partir de 10 TND) Livrason entre 2 ou 3 apres la confirmation</Choice>
        </Select>
      </ChoiceContainer>
    </PersonalContainer>
  )
}

export default DeliveryInfo;