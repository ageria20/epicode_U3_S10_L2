import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    isSelected: false,
  };

  render() {
    return (
      <>
        <Card
          onClick={() => {
            this.props.changeAsin(this.props.book.asin);

            this.setState({ isSelected: !this.state.isSelected });
          }}
          style={{ border: this.state.isSelected ? "3px solid red" : "none" }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
