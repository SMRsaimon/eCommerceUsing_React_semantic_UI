import React, { useContext } from "react";
import "./Shop.css";
import { Cart } from "../Cart/Cart";
import { Container, Grid } from "semantic-ui-react";
import { globalContext } from "../../../App";

export const Shop = () => {
  const { state } = useContext(globalContext);

  return (
    <>
      <Container>
        <Grid>
          <Grid.Row>
            {state.fakeData.map((pd) => (
              <Cart products={pd} />
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};
