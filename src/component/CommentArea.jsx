import { useState, useEffect } from "react";

import CommentList from "./CommentList";
import { Alert, Container } from "react-bootstrap";
import AddComment from "./AddComment";

const CommentArea = props => {
  // state = {
  //   isSelected: false,
  //   comments: [],
  // };

  // const [isSelected, setIsSelected] = useState(false);
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    // setIsSelected(true);

    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNmRlNDNhMzhjYjAwMTVmNjNkMmIiLCJpYXQiOjE3MTk0OTYxNjQsImV4cCI6MTcyMDcwNTc2NH0.cpIV-C6zAMmk9q3Pzvt6luuSrlNx09cvMsO45XsVsdg",
        },
      });
      if (resp.ok) {
        setComments(await resp.json());
      } else {
        console.log("Errore nel caricamento dei dati", props.asin);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (props.asin) fetchComments();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin]);

  // componentDidUpdate(prevProps) {
  //   console.log("didUpdate");
  //   if (prevProps.asin != this.props.asin) {
  //     console.log("didUpdate INSIDE");
  //     this.fetcComments();
  //   } else console.log("no asin");
  // }

  console.log(props.asin);
  return (
    <>
      {props.asin.length > 0 && (
        <Container className="mb-3">
          <h3>Aggiungi Commento</h3>
          <AddComment asin={props.asin} fetchComments={fetchComments} />
        </Container>
      )}

      <h3>Commenti</h3>
      {comments.length > 0 ? (
        <CommentList comments={comments} fetchComments={fetchComments} />
      ) : (
        <Alert> Non sono presenti recensioni </Alert>
      )}
    </>
  );
};

export default CommentArea;
