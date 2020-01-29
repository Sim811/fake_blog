import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";



const Navbar = () => (
  <Menu secondary inverted style={{paddingRight: 2,}}>
    <Menu.Menu position='right'>

      <Link to="/">
        <Menu.Item>
          Home
      </Menu.Item>
      </Link>
      <Link to="/about">
        <Menu.Item>
          About
      </Menu.Item>
      </Link>
      <Link to="/blog">
        <Menu.Item>
          Blog
      </Menu.Item>
      </Link>
    </Menu.Menu>
  </Menu>
);


export default Navbar;