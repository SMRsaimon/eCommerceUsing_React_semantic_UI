import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Grid, GridColumn, Header, Icon, Image } from "semantic-ui-react";
import { globalContext } from "../../../App";
import { addToCart, getDataFromLocalStorage } from "../../../Reducer/actions/CartAction";
import "./Cart.css";

export const Cart = ({ products, ProductDetails }) => {
  const { product_img, discount,  id, title,description, price } = products;


  const {dispatch}=useContext(globalContext)
  const center = {
    display: "flex",
    justifyContent: "center",
  };
 

  return (
    <>
      <Grid.Column
        style={center}
        columns={3}
        mobile={16}
        tablet={8}
        computer={ProductDetails?15:5}
      >
        <Card  style={{ marginTop: 50, padding: 20 }}>
          <Grid columns={2}>
            <Grid.Column style={center} mobile={15} tablet={ProductDetails?16:8} computer={ProductDetails?16:8}>
              <Image src={product_img} />
            </Grid.Column>

            <Grid.Column style={center} mobile={15} tablet={ProductDetails?16:8} computer={ProductDetails?16:8}>
              <div>
                <Header as={"h4"}>
                  {title}
                </Header>
                <Header size="medium">Price: {price}</Header>
                <Header color={"green"} as="h3">Discount: {discount}%</Header>
              </div>
            </Grid.Column>
            {ProductDetails && <Grid.Column mobile={15} tablet={15} computer={15}>

              <Header as={"h5"}>
                  {description}
                </Header>

            </Grid.Column>

            }
            <div>
              <Button  onClick={()=>dispatch(addToCart(products))}  icon primary>
                Buy Now
                <Icon name="cart plus"></Icon>
              </Button>
              {!ProductDetails && (
                <Button as={Link} to={`/product-details/${id}`} secondary>
                  View Details
                </Button>
              )}
            </div>
          </Grid>
        </Card>
       
      </Grid.Column>
     
     
    </>
  );
};
