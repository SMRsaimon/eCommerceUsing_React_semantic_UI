import React, { useState } from 'react';
import { Button, Card, Container, Divider, Header, Modal } from 'semantic-ui-react';
import "./PriceCalculation.css"

const PriceCalculation = ({totalDiscount, productPrice}) => {

    const [open, setOpen] = useState(false)
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
            <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button primary  >Process Checkout </Button>}
    >
      <Modal.Header>Thank you!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
        Your order has
been placed!.
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button  primary onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal>
            </Container>
        </Card>
    );
};

export default PriceCalculation;