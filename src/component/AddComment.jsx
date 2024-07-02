import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = props => {
  // state = {
  //   newComment: {
  //     comment: "",
  //     rate: "1",
  //     elementId: this.props.asin,
  //   },
  // };

  const [newComment, setNewComment] = useState({
    comment: "",
    rate: "1",
    elementId: props.asin,
  });

  const addComment = e => {
    e.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNmRlNDNhMzhjYjAwMTVmNjNkMmIiLCJpYXQiOjE3MTk0OTYxNjQsImV4cCI6MTcyMDcwNTc2NH0.cpIV-C6zAMmk9q3Pzvt6luuSrlNx09cvMsO45XsVsdg",
      },
    }).catch(err => console.log(err));
  };

  return (
    <Form onSubmit={e => addComment(e)}>
      <Form.Group className="mb-3" controlId="formBasicComment">
        <Form.Control
          type="text"
          placeholder="Commento"
          value={newComment.comment}
          onChange={e => setNewComment({ ...newComment, comment: e.target.value })}
        />
      </Form.Group>
      <Form.Select
        aria-label="Default select example"
        value={newComment.rate}
        onChange={e => setNewComment({ ...newComment, rate: e.target.value })}
      >
        <option value="1">⭐</option>
        <option value="2">⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="5">⭐⭐⭐⭐⭐</option>
      </Form.Select>

      <Button variant="primary" type="submit" className="mt-3">
        Invia
      </Button>
    </Form>
  );
};

export default AddComment;
