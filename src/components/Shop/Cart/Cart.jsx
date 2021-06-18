import React from "react";
import { Link } from "react-router-dom";
import { Card, Grid, Header, Image } from "semantic-ui-react";
import "./Cart.css";

export const Cart = ({ products }) => {
  console.log(products);

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
        computer={5}
      >
        <Card style={{ marginTop: 50, padding: 20 }}>
          <Grid columns={2}>
            <Grid.Column style={center} mobile={15} tablet={8} computer={8}>
              <Image src={img} />
            </Grid.Column>

            <Grid.Column style={center} mobile={15} tablet={8} computer={8}>
              <div>
                <Header as={"h4"}>{name.slice(0, 40)}...</Header>
                <Header size="medium">Price: {price}</Header>
                <Header as="h6">Seller: {seller}</Header>
              </div>
            </Grid.Column>
          </Grid>
        </Card>
      </Grid.Column>
    </>
  );
};
