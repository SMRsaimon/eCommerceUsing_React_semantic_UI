import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Card,
  Grid,
  Container,
  Header,
  Icon,
  Image,
} from "semantic-ui-react";
import { globalContext } from "../../../App";
import {
  addToCart,
  getDataFromLocalStorage,
} from "../../../Reducer/actions/CartAction";
import "./Cart.css";

export const Cart = ({ products, ProductDetails }) => {
  const { product_img, discount, id, title, description, price } = products;

  const history=useHistory()

  const { dispatch } = useContext(globalContext);
  const center = {
    display: "flex",
    justifyContent: "center",
  };
const hendelProductsDetails=(id)=>{

  history.push(`/product-details/${id}`)



}
  return (
    <>
      <Grid.Column
        style={center}
        columns={4}
        mobile={16}
        tablet={8}
        computer={4}
      >
        <Card className={"Shop-card-container"}>
          <Grid>
            <Grid.Column width={16} textAlign={"center"}>
              <Image onClick={()=>hendelProductsDetails(id)} className={"shop-card-image"}   style={{ height: 200, width: "100%" }} src={product_img} />
            </Grid.Column>

            <Grid.Column width={16}>
        <Container
                className={"shop-view-details-button"}
                as={Link}
               
                to={`/product-details/${id}`}
                textAlign={"center"}
                width={16}
              >
                Quick View
              </Container> 

              <Header 
               
               onClick={()=>hendelProductsDetails(id)} className={"shop_page_product_title"} >
                {title}
              </Header>
            </Grid.Column>
            <Grid.Column width={16}>
              <Header style={{ color: "#c96",marginBottom:30 }} size="medium">
                ${price}
              </Header>
            </Grid.Column>
            {
                  discount>0 &&  <Grid.Column className={"discount-container"} width={10}>
                  <Header style={{marginLeft: "12px"}} color={"blue"} as="h3">
                  Discount: {discount}%
                  </Header>
                </Grid.Column>
                }
                
            

            <Card.Content extra>
            <Button  className={"add_to_cart_btn"}
                onClick={() => dispatch(addToCart(products))}
                icon
                
              >
                Buy Now
                &nbsp;&nbsp;
                <Icon name="cart plus"></Icon>
              </Button>
  
    </Card.Content>

             

            
          
          </Grid>
        </Card>
      </Grid.Column>
    </>
  );
};
