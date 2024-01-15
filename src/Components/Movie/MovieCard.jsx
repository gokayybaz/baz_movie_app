/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  //   CardText,
} from "reactstrap";

export default function MovieCard(props) {
  return (
    <Card
    // style={{
    //   width: "370px",
    // }}
    >
      <img height={400} alt="Sample" src={props.imageUrl} />
      <CardBody>
        <CardTitle tag="h5">{props.titleText}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Ortalama Puan : {props.subtitleText}
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
          {/* <Button
              onClick={() => this.props.removeMovie(this.props.movie)}
              color="danger"
              outline
            >
              Kaldır
            </Button> */}
        </div>
      </CardBody>
    </Card>
  );
}
