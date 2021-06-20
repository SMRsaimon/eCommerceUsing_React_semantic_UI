import React, { useContext } from "react";
import "./ProductDetailsCard.css";
import {
  Button,
  Rating,
  Container,
  Icon,
  Grid,
  Image,
  Header,
} from "semantic-ui-react";
import { globalContext } from "../../../../App";
import {
  addToCart,
  Decrement,
  Increment,
} from "../../../../Reducer/actions/CartAction";
const ProductDetailsCard = ({ product }) => {
  const { state, dispatch } = useContext(globalContext);

  const { product_img, id, title, description, price, reviews, quentity } =
    product;
  return (
    <>
      <Grid>
        <Grid.Column mobile={16} tablet={5} computer={5}>
          <Image style={{height:300, width:"100%"}} src={product_img} />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={10} computer={10}>
          <Container>
            <Header className={"productDetails-product-title"} as={"h1"}>
              {title}
            </Header>
            <Rating
              disabled
              maxRating={5}
              defaultRating={reviews[1]?.rating}
              icon="star"
              size="mini"
            />
            <span className={"total-review-count"}>
              {" "}
              ({reviews.length} Review)
            </span>
          </Container>
          <Container className={"product-detais-product-price"}>
            $ {price}
          </Container>

          <Container>
            <p className={"product-description"}>{description}</p>
          </Container>

          <Container>
            <Button
              className={"viewDetails_add_to_cart_btn"}
              onClick={() => dispatch(addToCart(product))}
              icon
            >
              Buy Now &nbsp;&nbsp;
              <Icon name="cart plus"></Icon>
            </Button>
          </Container>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default ProductDetailsCard;
