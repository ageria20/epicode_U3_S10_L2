import { useState } from "react";
import { Card } from "react-bootstrap";

const SingleBook = props => {
  // state = {
  //   isSelected: false,
  // };

  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <Card
        onClick={() => {
          props.changeAsin(props.book.asin);

          setIsSelected(!isSelected);
        }}
        style={{ border: isSelected ? "3px solid red" : "none" }}
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
