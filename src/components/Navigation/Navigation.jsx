import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Label, Menu } from "semantic-ui-react";
import { globalContext } from "../../App";
import "./Navigation.css";

const Navigation = () => {
  const { state, dispatch } = useContext(globalContext);

  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <>
      <Menu tabular attached="top">
        <Menu.Item position="left" name="Logo" />
        <Menu.Menu>
          <Menu.Item
          as={Link}
          to="/home"
            name="home"
            active={activeItem === "home"}
            onClick={handleItemClick}
          />
          <Menu.Item
          as={Link}
          to="/shop"
            name="Shop"
            active={activeItem === "Shop"}
            onClick={handleItemClick}
          />
        </Menu.Menu>
        <Menu.Item position="right">
          <Button style={{border:"none"}} color="green" basic icon>
            <Icon name="cart plus"></Icon>
            <span style={{fontSize:20, fontWeight:"bold", position:"relative", top:-8, color:"black"}}>4</span>
          </Button>
        </Menu.Item>

        <Menu.Item>
          <Button color="red" basic icon>
            <Icon name="log out"></Icon>
            Logout
          </Button>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navigation;
