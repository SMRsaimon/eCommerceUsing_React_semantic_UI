import React, { useContext } from "react";
import {
  Button,
  Card,
  Container,
  Grid,
  Header,
  Icon,
  Image,
} from "semantic-ui-react";
import { globalContext } from "../../../App";
import {
  Decrement,
  Increment,
  removeFromCart,
} from "../../../Reducer/actions/CartAction";
import "./AddedProductDetails.css";

const AddedProductDetails = ({ product }) => {
  const { product_img, discount, id, title, description, price, quentity } =
    product;

  let productPrice = price * quentity;

  const { state, dispatch } = useContext(globalContext);

  return (
    <Grid className={"added-single-product-container"}>
        <Grid.Column className={"close-icon-container"} textAlign={"right"} computer={15}>
        <Icon
            onClick={() => dispatch(removeFromCart(id))}
            className={"product-remove-icon"}
            name="close"
          />
      </Grid.Column>
      <Grid.Column textAlign={"center"} mobile={16} tablet={4} computer={4}>
        <Image
          className={"added-single-product-img"}
          src={product_img}
          size="medium"
          rounded
        />
      </Grid.Column>
      <Grid.Column textAlign={"center"} mobile={16} tablet={6} computer={6}>
        <Header as={"h3"}> {title}</Header>
        <Container>Quentity : {quentity}</Container>
        <Container>
          <Header color={"green"} as="h3">
            Discount: {discount}%
          </Header>
        </Container>
        <Container>
         
        </Container>
      </Grid.Column>
      <Grid.Column textAlign={"center"} mobile={16} tablet={6} computer={6}>
        <Container>
          {price} x {quentity}= {productPrice}
        </Container>

        <Container className={"increment-decrement-button-container"}>
          <Button onClick={() => dispatch(Increment(id))}>+ </Button>
          <Button>{quentity} </Button>
          <Button onClick={() => dispatch(Decrement(id))}>- </Button>
        </Container>
      </Grid.Column>
    </Grid>
  );
};

export default AddedProductDetails;
