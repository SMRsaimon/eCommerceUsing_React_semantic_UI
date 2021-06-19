
import { DECREMENT, GET_CART_FROM_LOCALSTORAGE, INCREMENT, REMOVE_FROM_CART } from "../actions/type.js";
import { ADD_TO_CART } from "../actions/type.js";
import {addToDatabaseCart,getDatabaseCart, removeFromDatabaseCart} from "../../LocalStorageFuntion/databaseManager"
import products from "../../sample_dataset/products.json"
import catagories from "../../sample_dataset/categories.json"
import customers from "../../sample_dataset/customers.json"


export   const initialState = {
  cart: [],
  products:products,
 
   catagories:catagories,
   customers:customers
 
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const sameProduct = state.cart.find((pd) => pd.id === action.payload.id)
      let count = 1;
      let newCart;
      if (sameProduct) {
         
        count = action.payload.quentity + 1;
        action.payload.quentity = count;
        const otherProduct = state.cart.filter(x => x.id !== action.payload.id)
        newCart = [...otherProduct, sameProduct]
        
      } else {
  
        action.payload.quentity = count;
        newCart = [...state.cart, action.payload]
      }
      addToDatabaseCart(action.payload.id, count)
     
      return {...state,cart:newCart};
    }

    case GET_CART_FROM_LOCALSTORAGE:{
      const saveCart = getDatabaseCart()
      const productKeys = Object.keys(saveCart)
      const previousCut = productKeys.map(pdkey => {
        const product = state.products.products.find(x => x.id == pdkey)
        product.quentity = saveCart[pdkey]
  
        return product
      })

      return {...state,cart:previousCut};
    }
    case REMOVE_FROM_CART: {

      const newCart=state.cart.filter(pd=>pd.key !== action.payload)
      removeFromDatabaseCart( action.payload)
    
      return {...state,cart:newCart};
    }
    case INCREMENT: {
          
      const allProduct = [...state.cart]
      const productIndex = allProduct.findIndex((x) => x.key === action.payload)
      const product=allProduct[productIndex]
          
      product.quentity ++;
        
     allProduct.splice(productIndex, 1, product)
      
      return {...state,cart:allProduct};
    }
    case DECREMENT: {

     
      const allProduct = [...state.cart]
      const productIndex = allProduct.findIndex((x) => x.key === action.payload)
      const product=allProduct[productIndex]

      if(product.quentity>1){
         product.quentity --;
      }
    
        
     allProduct.splice(productIndex, 1, product)
      
      return {...state,cart:allProduct};
    }
 
    default: {
      return state;
    }
  }
};

export default cartReducer;


