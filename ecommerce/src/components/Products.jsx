import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import PropTypes from 'prop-types';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ( props ) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          props.cat
            ? `http://localhost:5000/api/products?category=${props.cat}`
            : "http://localhost:5000/api/products"
        );
        console.log(res.data)
        setProducts(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    getProducts();
  }, [props.cat]);

  useEffect(() => {
    props.cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(props.filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, props.cat, props.filters]);

  useEffect(() => {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(props.filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products,props.filters]);

  useEffect(() => {
    if (props.sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (props.sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [props.sort]);

  return (
    <Container>
      {props.cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : filteredProducts
            
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};


Products.propTypes = {
  cat: PropTypes.string,
  filters: PropTypes.object,
  sort: PropTypes.string
};

export default Products;