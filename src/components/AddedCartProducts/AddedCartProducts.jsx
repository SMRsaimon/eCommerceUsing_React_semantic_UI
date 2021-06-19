import React, { useContext, useEffect } from "react";
import { Grid, Image, Container, Header, Divider } from "semantic-ui-react";
import { globalContext } from "../../App";
import { getDataFromLocalStorage } from "../../Reducer/actions/CartAction";
import "./AddedCartProducts.css";
import AddedProductDetails from "./AddedProductDetails/AddedProductDetails";

const AddedCartProducts = () => {
  const { state, dispatch } = useContext(globalContext);
  useEffect(() => {
    dispatch(getDataFromLocalStorage());
  }, []);

//   calculate total price with discount 
  let productPrice = state.cart.reduce((total, currentValue) => {
    let totalPrice = total + currentValue.price * currentValue.quentity;

    return totalPrice;
  }, 0);
//   total discount 
let totalDiscount = state.cart.reduce((total, currentValue) => {
   let total_discount=0
    if (currentValue.discount !== 0) {
        total_discount= total+ (currentValue.price * currentValue.discount* currentValue.quentity)/100 ;
        total_discount=total_discount
     
    }
    return  total_discount

   
  }, 0);
  productPrice= productPrice-totalDiscount


//   Calculate total quentity 
  const totalQuentity = state.cart.reduce((total, current) => {
    return total + current.quentity;
  }, 0);

  return (
    <Container style={{ marginTop: 100 }}>
      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={8} floated="left">
          <Container className={"AddedCartProducts-header"}>
            <Container textAlign="left">
              My Cart ({state.cart.length}){" "}
            </Container>
            <Container className={"header-product-price"} textAlign="right">
              Products Price: {productPrice}{" "}
            </Container>
          </Container>
          <Divider />
          {state.cart.map((pd) => (
            <AddedProductDetails key={pd.key} product={pd} />
          ))}
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={6} floated="right">
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default AddedCartProducts;
