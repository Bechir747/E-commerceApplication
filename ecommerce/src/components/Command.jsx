import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import DeliveryInfo from "./DeliveryInfo";
import PaymentInfo from "./PaymentInfo";
import styled from "styled-components"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const FormContainer = styled.div`
width: 100%;
height: 100%;
display: flex; 
flex-direction: column;

`;
const Progressbar = styled.div`
width: 100%;
height: 10px;
background-color: white;
border-radius: 10px 10px 0 0;
`;
const ProgressbarInt = styled.div`
width: 33.3%;
  height: 100%;
  background-color: DarkRed;
  border-radius: ${(props) => props.page === 2?"10px 10px 0 0 ": "10px 0 0 0"};
`;
const FormHeader = styled.div`
display: flex;
justify-content: space-between;
margin-top: 5px;
`;

const Header = styled.div`
margin-left:10px; 
font-size: 24px;
`;
const FormBody = styled.div`
flex: 80%;
`;
const FormFooter = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;`;
const ButtonP = styled.button`
width: 100px;
height: 40px;
color: white;
border: 0 none;
border-radius: 1px;
cursor: pointer;
padding: 10px 5px;
margin: 5px;
background-color: ${(props) => props.page ? "DarkRed" : "Gray"};
opacity: ${(props) => props.page ? 1 : 0.8};
cursor: ${(props) => props.page ? "pointer" : "not-allowed"};
`;
const ButtonS = styled.button`
width: 100px;
height: 40px;
background-color: DarkRed;
color: white;
border: 0 none;
border-radius: 1px;
cursor: pointer;
padding: 10px 5px;
margin: 5px;
background-color: ${(props) => !(props.page===2) ? "DarkRed" : "Gray"};
opacity: ${(props) => !(props.page===2) ? 1 : 0.8};
cursor: ${(props) => !(props.page===2) ? "pointer" : "not-allowed"};
`;



const Command = ({formData, setFormData}) => {
  const [page, setPage] = useState(0);

  const FormTitles = ["1.ADRESSE CLIENT", "2.DÉTAILS DE LIVRAISON", "3.MODE DE PAIEMENT"];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <DeliveryInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <PaymentInfo formData={formData} setFormData={setFormData} />;
    }
  };
  const CheckStyle = {
    color: 'Green',
    margin: '5px', 
    display: 'none'
  };

  return (
    <FormContainer>
      <Progressbar>
        <ProgressbarInt page={page}
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></ProgressbarInt>
      </Progressbar>
      <FormContainer>
        <FormHeader>
          <Header>{FormTitles[page]}</Header>
          <CheckCircleIcon style={CheckStyle}/>
          <CheckCircleOutlineIcon style={{margin: "5px"}}/>
        </FormHeader>
        <FormBody>{PageDisplay()}</FormBody>
        <FormFooter>
            <div></div>
            <div>
            <ButtonP page ={page}
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            précédente
          </ButtonP>
          <ButtonS page = {page}
            onClick={() => {
              if (page === FormTitles.length - 1) {
                console.log(page)
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            Suivante
          </ButtonS>
            </div>
          
        </FormFooter>
      </FormContainer>
    </FormContainer>
  );
}

export default Command;