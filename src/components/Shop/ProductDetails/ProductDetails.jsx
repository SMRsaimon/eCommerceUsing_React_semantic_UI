import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { globalContext } from '../../../App';
import { Cart } from '../Cart/Cart';
import ProductsComments from './ProductComments/ProductsComments';
import "./ProductDetails.css"

const ProductDetails = () => {

    let { id } = useParams();
   const {state}=useContext(globalContext)
   
   const product=state.fakeData.find(pd=>pd.key===id)



  
    return (
        <Container>
           <Cart ProductDetails={true} products={product}  />
              

              <ProductsComments/>

         
            
        </Container>
    );
};

export default ProductDetails;