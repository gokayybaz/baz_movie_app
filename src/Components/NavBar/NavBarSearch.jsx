/* eslint-disable react/prop-types */
import { Component } from "react";
import { Input, Form, Button } from "reactstrap";

export default class NavBarSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
    };
  }
  render() {
    return (
      <div>
        <Form style={{ display: "flex" }}>
          <Input
            onChange={
              this.props.searchEvent
              // console.log(e.target.value);
            }
            style={{ width: "100%" }}
            placeholder="Search for Movie/Series"
          />
          <Button
            // onClick={this.props.filterMovies()}
            style={{ marginLeft: "0.5rem" }}
            color="warning"
          >
            Search
          </Button>
        </Form>
      </div>
    );
  }
}
