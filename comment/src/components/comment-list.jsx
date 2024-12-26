import { Comment } from "./comment";

export const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment, index) => (
        <Comment comment={comment} key={index} />
      ))}
    </ul>
  );
};
