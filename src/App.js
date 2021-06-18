import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { createContext, useReducer } from "react";
import cartReducer, { initialState } from "./Reducer/reducers/cartReducer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const globalContext = createContext({});
function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <globalContext.Provider
      value={{ state, dispatch }}
    ></globalContext.Provider>
  );
}

export default App;
