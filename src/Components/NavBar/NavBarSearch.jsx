import { Component } from "react";
import { Button, Input } from "reactstrap";

export default class NavBarSearch extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Input
          style={{ width: "100%" }}
          placeholder="Search for Movie/Series"
        />
        <Button style={{ marginLeft: "0.5rem" }} color="warning">
          Search
        </Button>
      </div>
    );
  }
}
