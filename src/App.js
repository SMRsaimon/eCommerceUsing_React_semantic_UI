import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { createContext, useReducer } from "react";
import cartReducer, { initialState } from "./Reducer/reducers/cartReducer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { Home } from "./components/Home/Home";

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
          </Route>
        </Switch>
      </Router>
    </globalContext.Provider>
  );
}

export default App;
