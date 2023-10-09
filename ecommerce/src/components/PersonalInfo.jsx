import React from 'react'
import styled from "styled-components";

const SignUpContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const FormContainer = styled.form`
margin-left: 40px;
display: flex;
flex-wrap: wrap;
`;

const InputContainer = styled.div`
width: 40%;
margin: 20px;
display: flex;
margin-top: 10px;
margin-right: 20px;
`;

const Input = styled.input`
display: flex;
padding: 10px;
`;


const SelectBox = styled.select`
width: 177px;
display: flex;
padding: 10px;
`;


export const PersonalInfo = ({formData, setFormData}) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <SignUpContainer>
      <FormContainer>
        <InputContainer>
          <Input type="text" placeholder="Nom..." 
          name="lastName" value={formData.lastName} onChange={handleChange}/>
        </InputContainer>
        <InputContainer>
          <Input type="text" placeholder="Prénom..." 
          name="firstName" value={formData.firstName} onChange={handleChange}/>
        </InputContainer>
        <InputContainer>
          <Input type="text" placeholder="Adresse..." 
          name="address" value={formData.address} onChange={handleChange}/>
        </InputContainer>
        <InputContainer>
          <Input type="text" placeholder="Numéro de Téléphone..." 
          name="phoneNumber" value={formData.phoneNumber ? formData.phoneNumber: ""} onChange={handleChange}/>
        </InputContainer>

        <InputContainer>
  <SelectBox name="region" value={formData.region} onChange={handleChange}>
    <option value="" disabled>Region</option>
    <option value="Medenine">Medenine</option>
    <option value="Tunis">Tunis</option>
  </SelectBox>
</InputContainer>

        <InputContainer>
          <Input type="text" placeholder="Ville..." 
          name="city" value={formData.city} onChange={handleChange}/>
        </InputContainer>
      </FormContainer>
      
  </SignUpContainer>
  )
}

export default PersonalInfo;
