import { Button, ListGroup, Row, Col, Badge } from "react-bootstrap";

const SingleComment = props => {
  const delComment = async () => {
    // setIsSelected(true);

    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.id, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNmRlNDNhMzhjYjAwMTVmNjNkMmIiLCJpYXQiOjE3MTk0OTYxNjQsImV4cCI6MTcyMDcwNTc2NH0.cpIV-C6zAMmk9q3Pzvt6luuSrlNx09cvMsO45XsVsdg",
        },
      });
      if (resp.ok) {
        alert("Comments Successfully deleted");
        props.fetchComments();
      } else {
        console.log("Errore nel caricamento dei dati");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ListGroup.Item>
      <Row className="justify-content-between align-items-center">
        <Col xs={10} md={10}>
          <span>
            {props.author} <strong>ha detto:</strong> {props.comment} <Badge>{props.rate}</Badge>
          </span>
        </Col>
        <Col xs={2} md={2}>
          <Button variant="danger" onClick={() => delComment()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
            </svg>
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default SingleComment;
