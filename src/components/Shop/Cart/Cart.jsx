import React from "react";
import { Link } from "react-router-dom";
import { Grid, Header, Image } from "semantic-ui-react";
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
      <Grid.Column style={center} columns={3} mobile={16} tablet={8} computer={5}>
        <Grid>
          <Grid.Column
            style={center}
            mobile={15}
            tablet={8}
            computer={8}
          >
            <Image src={img} />
          </Grid.Column>
          <Grid.Column
            style={center}
            mobile={15}
            tablet={8}
            computer={8}
          >
            <Header as={Link}>{name.slice(0, 20)}...</Header>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </>
  );
};
