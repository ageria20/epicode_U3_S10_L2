import { Card } from "react-bootstrap";

const SingleBook = props => {
  // state = {
  //   isSelected: false,
  // };

  return (
    <>
      <Card
        onClick={() => {
          props.changeAsin(props.book.asin);
        }}
        style={{ border: props.book.asin === props.asin ? "3px solid red" : "3px solid transparent" }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
