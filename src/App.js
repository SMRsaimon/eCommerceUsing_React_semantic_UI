import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { createContext, useReducer } from "react";
import cartReducer, { initialState } from "./Reducer/reducers/cartReducer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { Home } from "./components/Home/Home";
import {Shop} from "./components/Shop/Shop/Shop"
import ProductDetails from "./components/Shop/ProductDetails/ProductDetails";
 
export const globalContext = createContext({});
function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <globalContext.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navigation />
          <Home/> 
            
          </Route>
          <Route path="/home">
            <Navigation />
          <Home/>  
          </Route>
          <Route path="/shop">
            <Navigation />
          <Shop></Shop>
          </Route>
          <Route path="/product-details/:id">
            <Navigation />
       <ProductDetails/> 
          </Route>
        </Switch>
      </Router>
    </globalContext.Provider>
  );
}

export default App;
