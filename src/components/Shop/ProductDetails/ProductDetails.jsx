import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Comment, Container, Header } from "semantic-ui-react";
import { globalContext } from "../../../App";
import ProductsComments from "./ProductComments/ProductsComments";
import "./ProductDetails.css";
import ProductDetailsCard from "./ProductDetailsCard/ProductDetailsCard";

const ProductDetails = () => {
  let { id } = useParams();
  const { state } = useContext(globalContext);

  const product = state.products.products.find((pd) => pd.id == id);

  return (
    <Container className={"product-details-container"}>
      <ProductDetailsCard product={product} />

      <Comment.Group>
        <Header as="h3" dividing>
          Comments
        </Header>
        {product.reviews.length > 0 &&
          product.reviews.map((review) => (
            <ProductsComments comments={review} />
          ))}
      </Comment.Group>
    </Container>
  );
};

export default ProductDetails;
