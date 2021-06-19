import React from 'react';
import { Button, Card, Container, Divider, Header } from 'semantic-ui-react';
import "./PriceCalculation.css"

const PriceCalculation = ({totalDiscount, productPrice}) => {
    return (
        <Card className={"processCheclOutCalculationContainer"}>
            <Container>
                <Header> Checkout Summary</Header>
           

            </Container>
            <Divider />

            <Container style={{marginBottom:20}}>
            <Header  as={"h4"}> Sub Total : &nbsp; ${productPrice}  </Header>
            </Container>
            <Container>
            <Header as={"h4"}> Discount :  &nbsp;- ${totalDiscount}</Header>
            </Container>
            <Divider />
            <Container>
            <Header> Total :&nbsp;  ${productPrice-totalDiscount}</Header>
            </Container>
            <Container style={{marginTop:20}}>
            <Button primary> Process to CheckOut </Button>
            </Container>
        </Card>
    );
};

export default PriceCalculation;