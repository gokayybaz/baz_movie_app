/* eslint-disable react/prop-types */
import { Input, Form, Button } from "reactstrap";

export default function NavBarSearch(props) {
  return (
    <div>
      <Form style={{ display: "flex" }}>
        <Input
          onChange={
            props.searchEvent
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
