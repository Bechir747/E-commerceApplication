import styled from "styled-components";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from "react";
import { mobile } from "../responsive";
import { useEffect } from 'react';
import axios from "axios";
import Product from "./Product"

const Container = styled.div`
  height: 100%;
  background-size: cover;
  background-color: AntiqueWhite;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  margin: 20px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  flex: 1;
  border-color: white;
  background-color: #8B0000;
  color: white;
  cursor: pointer;
`;



const ProductContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function SearchProduct() {

    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    useEffect(()=>{
      const fetchUsers = async ()=>{
        const res = await axios.get(`http://localhost:5000/api/products?q=${query}`)
        setData(res.data);
      }
      fetchUsers()
    }, [query])
  
  return (
    <Container>
         <InputContainer>
            <Input placeholder="Recherche" onChange={(e)=> setQuery(e.target.value)}/>
            <Button>
            <SearchOutlinedIcon />
            </Button>            
        </InputContainer>
        <ProductContainer>
      {data.slice(0,8).map((item) => <Product item={item} key={item.id} />)}
      </ProductContainer>
    </Container>
  );
}

export default SearchProduct;