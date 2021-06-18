import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Grid, GridColumn, Header, Icon, Image } from "semantic-ui-react";
import "./Cart.css";

export const Cart = ({ products, ProductDetails }) => {
  const { img, key, name, price, seller } = products;

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
              <Image src={img} />
            </Grid.Column>

            <Grid.Column style={center} mobile={15} tablet={ProductDetails?16:8} computer={ProductDetails?16:8}>
              <div>
                <Header as={"h4"}>
                  {ProductDetails ? name : name.slice(0, 40)}...
                </Header>
                <Header size="medium">Price: {price}</Header>
                <Header as="h6">Seller: {seller}</Header>
              </div>
            </Grid.Column>
            <div>
              <Button icon primary>
                Buy Now
                <Icon name="cart plus"></Icon>
              </Button>
              {!ProductDetails && (
                <Button as={Link} to={`/product-details/${key}`} secondary>
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
