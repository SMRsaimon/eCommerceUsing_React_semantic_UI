import React, { useContext, useEffect } from "react";
import { Grid, Container, Divider, Button } from "semantic-ui-react";
import { globalContext } from "../../App";
import {
  ClearCart,
  getDataFromLocalStorage,
} from "../../Reducer/actions/CartAction";
import "./AddedCartProducts.css";
import AddedProductDetails from "./AddedProductDetails/AddedProductDetails";
import PriceCalculation from "./PriceCalculation/PriceCalculation";

const AddedCartProducts = () => {
  const { state, dispatch } = useContext(globalContext);
  useEffect(() => {
    dispatch(getDataFromLocalStorage());
  }, []);

  //   calculate total
  let productPrice = state.cart.reduce((total, currentValue) => {
    let totalPrice = total + currentValue.price * currentValue.quentity;

    return totalPrice;
  }, 0);
  //  calculate  total discount
  let totalDiscount = state.cart.reduce((total, currentValue) => {
    let total_discount = 0;
    if (currentValue.discount !== 0) {
      total_discount =
        total +
        (currentValue.price * currentValue.discount * currentValue.quentity) /
          100;
      total_discount = total_discount;
    }
    return total_discount;
  }, 0);

  //   Calculate total quentity
  const totalQuentity = state.cart.reduce((total, current) => {
    return total + current.quentity;
  }, 0);

  //   hendel cart clear
  const hendelCartClear = () => {
    dispatch(ClearCart());
    localStorage.clear();
  };

  return (
    <Container style={{ marginTop: 50 }}>
      <Grid >
        <Grid.Column mobile={16} tablet={8} computer={8} floated="left">
          {state.cart.length !== 0 && (
            <Container style={{marginBottom: 25}} textAlign="right">
              <Button color={"red"} onClick={hendelCartClear}>
               
                Clear Cart
              </Button>
            </Container>
          )}
                <Divider />
          <Container className={"AddedCartProducts-header"}>
            <span >
              My Cart ({state.cart.length})
            </span>
            <span className={"header-product-price"} >
              Products Price: ${productPrice}
            </span>
          </Container>
          <Divider />
          {state.cart.map((pd) => (
            <AddedProductDetails key={pd.key} product={pd} />
          ))}
        </Grid.Column>
        <Grid.Column style={{marginLeft:"auto", marginRight:"autos"}} mobile={16} tablet={8} computer={6} floated="right">
            {state.cart.length !== 0 && 
           <PriceCalculation
           totalDiscount={totalDiscount}
           productPrice={productPrice}
         />

            }
         
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default AddedCartProducts;
