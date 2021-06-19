import React from 'react';
import { Button, Container, Grid, Header, Icon, Image } from 'semantic-ui-react';
import "./AddedProductDetails.css"

const AddedProductDetails = ({product}) => {
    const { product_img, discount,  id, title,description, price,quentity } = product;


    return (
        <Grid className={"added-single-product-container"}>
             <Grid.Column textAlign={"center"} mobile={16} tablet={4} computer={4} >

             <Image className={"added-single-product-img"} src={product_img} size='medium' rounded />

             </Grid.Column>
             <Grid.Column textAlign={"center"} mobile={16} tablet={6} computer={6} >
                <Header as={"h3"}> {title}</Header>
                <Container>
                 Quentity : {quentity}
                </Container>
                <Container >
                <Header color={"green"} as="h3">Discount: {discount}%</Header>
                </Container>
                <Container >
              <Icon className={"product-remove-icon"}  name='close' />
                </Container>
             </Grid.Column>
             <Grid.Column textAlign={"center"} mobile={16} tablet={6} computer={6} >

fffffffffff

             </Grid.Column>
           
        </Grid>
    );
};

export default AddedProductDetails;