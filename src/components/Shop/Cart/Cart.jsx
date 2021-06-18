import React from "react";
import { Grid, Image } from "semantic-ui-react";
import "./Cart.css";

export const Cart = ({products}) => {
  return (
    <>
      <Grid.Column style={{display:"flex", justifyContent:"center"}} columns={4} mobile={16} tablet={8} computer={4}>
        <Image src="/images/wireframe/media-paragraph.png" />
      </Grid.Column>
    </>
  );
};
