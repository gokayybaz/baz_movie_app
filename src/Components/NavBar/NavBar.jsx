/* eslint-disable react/prop-types */
import { Navbar, NavbarBrand } from "reactstrap";
import NavBarButton from "./NavBarButton";
import NavBarSearch from "./NavBarSearch";

export default function NavBar(props) {
  return (
    <>
      <Navbar color="dark" dark>
        <NavbarBrand style={{ display: "flex", alignItems: "center" }}>
          <NavBarButton />
          <h3 style={{ marginLeft: "1rem" }}>Baz Movie App</h3>
        </NavbarBrand>
        <NavBarSearch searchEvent={props.searchEvent} />
      </Navbar>
    </>
  );
}
