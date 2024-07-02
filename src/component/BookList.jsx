import { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = props => {
  // state = {
  //   searchQuery: "",
  //   asin: "",
  // };

  const [searchQuery, setSearchQuery] = useState("");
  const [asin, setAsin] = useState("");

  const changeAsin = newAsin => {
    setAsin(newAsin);
  };

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </Form.Group>

          <Row className="g-2 mt-3">
            {props.books
              .filter(book => book.title.toLowerCase().includes(searchQuery))
              .map(book => (
                <Col xs={12} md={6} key={book.asin}>
                  <SingleBook book={book} changeAsin={changeAsin} />
                </Col>
              ))}
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <CommentArea asin={asin} />
        </Col>
      </Row>
    </>
  );
};

export default BookList;
