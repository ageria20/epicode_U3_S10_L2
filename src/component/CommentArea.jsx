import { Component } from "react";

import CommentList from "./CommentList";
import { Alert, Container } from "react-bootstrap";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    isSelected: false,
    comments: [],
  };

  fetcComments = async () => {
    this.setState({ isSelected: true });

    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNmRlNDNhMzhjYjAwMTVmNjNkMmIiLCJpYXQiOjE3MTk0OTYxNjQsImV4cCI6MTcyMDcwNTc2NH0.cpIV-C6zAMmk9q3Pzvt6luuSrlNx09cvMsO45XsVsdg",
        },
      });
      if (resp.ok) {
        this.setState({ comments: await resp.json() });
      } else {
        console.log("Errore nel caricamento dei dati", this.props.asin);
      }
    } catch (err) {
      console.log(err);
    }
  };
  componentDidUpdate(prevProps) {
    console.log("didUpdate");
    if (prevProps.asin != this.props.asin) {
      console.log("didUpdate INSIDE");
      this.fetcComments();
    } else console.log("no asin");
  }

  //   componentDidMount() {
  //     this.fetcComments();
  //   }

  render() {
    console.log(this.props.asin);
    return (
      <>
        <h3>Commenti</h3>
        {this.state.comments.length > 0 ? (
          <CommentList comments={this.state.comments} />
        ) : (
          <Alert> Non sono presenti recensioni </Alert>
        )}

        {this.props.asin.length > 0 && (
          <Container>
            <h3>Aggiungi Commento</h3>
            <AddComment asin={this.props.asin} />
          </Container>
        )}
      </>
    );
  }
}

export default CommentArea;
