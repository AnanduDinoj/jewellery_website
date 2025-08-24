import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`;

const ProductCard = ({ product }) => (
  <Card>
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>${product.price}</p>
  </Card>
);

export default ProductCard;
