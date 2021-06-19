import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Comment, Container, Form, Header } from 'semantic-ui-react';
import { globalContext } from '../../../App';
import { Cart } from '../Cart/Cart';
import ProductsComments from './ProductComments/ProductsComments';
import "./ProductDetails.css"

const ProductDetails = () => {

    let { id } = useParams();
   const {state}=useContext(globalContext)
   
   const product=state.products.products.find(pd=>pd.id==id)


  
    return (
        <Container>
            {/* <Cart ProductDetails={true} products={product}  /> */}
            <Comment.Group>
             <Header as='h3' dividing>
      Comments
    </Header>
    
     {
       product.reviews.length>0 && product.reviews.map(review=>   <ProductsComments comments={review} />)
     }

    <Form reply >
      <Form.TextArea name="comment" />
      <Button type="submit" content='Add Comment' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
            

         
            
        </Container>
    );
};

export default ProductDetails;