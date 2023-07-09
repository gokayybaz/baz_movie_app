/* eslint-disable react/prop-types */
import { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  //   CardText,
} from "reactstrap";

export default class MovieCard extends Component {
  render() {
    return (
      <Card
      // style={{
      //   width: "18rem",
      // }}
      >
        <img height={400} alt="Sample" src={this.props.imageUrl} />
        <CardBody>
          <CardTitle tag="h5">{this.props.titleText}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Tür : {this.props.subtitleText}
          </CardSubtitle>
          {/* <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card‘s content.
            </CardText> */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button color="success" outline>
              İzle
            </Button>
            <Button color="danger" outline>
              Kaldır
            </Button>
          </div>
        </CardBody>
      </Card>
    );
  }
}
