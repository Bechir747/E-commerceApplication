import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom';
import { useState } from "react";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Newest")
  const handleFilters = (e) =>{
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name] : value,
    })
    console.log({cat, filters, sort})
  }


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Notre Articles:</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrer les articles :</FilterText>
          <Select name = "color" onChange ={handleFilters}>
            <Option disabled >
              Couleur:
            </Option>
            <Option value="White">blanc</Option>
            <Option value="Black">noir</Option>
            <Option value="Orange">orangé</Option>
            <Option value="Blue">bleu</Option>
            <Option value="Green">vert</Option>
            <Option value="Red">rouge</Option>
          </Select>
          <Select name = "size" onChange ={handleFilters}>
            <Option disabled >
              Taille: 
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Trier les articles :</FilterText>
          <Select onChange={e=>setSort(e.target.value)} >
          <Option value="newest">Le plus récent</Option>
          <Option value="asc">Prix croissant</Option>
          <Option value="desc">Prix décroissant</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat = {cat} filters= {filters} sort = {sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;