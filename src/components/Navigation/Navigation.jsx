import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Label, Menu } from "semantic-ui-react";
import { globalContext } from "../../App";
import "./Navigation.css";

const Navigation = () => {
  const { state, dispatch } = useContext(globalContext);

  const [activeItem, setActiveItem] = useState("home");
console.log(state.products.products)
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };


  return (
    <>
      <Menu style={{ background: "rgb(236 230 230)" }} tabular attached="top">
        <Menu.Item    as={Link}
            to="/home"  position="left" name="Logo" />
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
          <Button as={Link} to="/cartAddedProducts" className={"cart-icon"} primary basic icon>
            <Icon name="cart plus"></Icon>
            <span className={"cart-icon-length"}
              
            >
              {state.cart.length}
            </span>
          </Button>
        </Menu.Item>

        <Menu.Item>
          {/* <Button color="red" basic icon>
            <Icon name="log out"></Icon>
            Logout
          </Button> */}
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navigation;
