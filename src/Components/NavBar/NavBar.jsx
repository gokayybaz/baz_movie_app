/* eslint-disable react/prop-types */
import { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import NavBarButton from "./NavBarButton";
import NavBarSearch from "./NavBarSearch";
export default class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar color="dark" dark>
          <NavbarBrand style={{ display: "flex", alignItems: "center" }}>
            <NavBarButton />
            <h3 style={{ marginLeft: "1rem" }}>Baz Movie App</h3>
          </NavbarBrand>
          <NavBarSearch searchEvent={this.props.searchEvent} />
        </Navbar>
      </>
    );
  }
}
