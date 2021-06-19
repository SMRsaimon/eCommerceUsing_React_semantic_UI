import React, { useContext } from "react";
import { Grid, Image, Container, Header, Divider } from "semantic-ui-react";
import { globalContext } from "../../App";
import "./AddedCartProducts.css";
import AddedProductDetails from "./AddedProductDetails/AddedProductDetails";

const AddedCartProducts = () => {

    const {state,dispatch}=useContext(globalContext)
    let productPrice = state.cart.reduce((total, currentValue) => {
        return total + currentValue.price * currentValue.quentity;
      }, 0);
    
      const totalQuentity = state.cart.reduce((total, current) => {
        return total + current.quentity;
      }, 0);
   



  return (
    <Container style={{ marginTop: 100 }}>
      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={8} floated="left">
          <Container className={"AddedCartProducts-header"}>
           <Container textAlign='left'>My Cart ({state.cart.length})  </Container>
           <Container className={"header-product-price"} textAlign='right'>Products Price: {productPrice}   </Container>
          </Container>
          <Divider />
          {state.cart.map(pd=>  <AddedProductDetails key={pd.key} product={pd} />)

          }
         
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={6} floated="right">
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default AddedCartProducts;
