import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = props => {
  return (
    <ListGroup>
      {props.comments.map((comment, index) => (
        <SingleComment
          key={index}
          comment={comment.comment}
          author={comment.author}
          rate={comment.rate}
          id={comment._id}
          fetchComments={props.fetchComments}
        />
      ))}
    </ListGroup>
  );
};
export default CommentList;
