import { useState } from "react";

export const CommentInput = ({ handleSubmit,buttonref }) => {
  const [commentInput, setCommentInput] = useState(""); // State for input

  const handleChange = (e) => {
    setCommentInput(e.target.value); // Update state with input value
  };

  return (
    <section className="comment-input">
      <input
        type="text"
        placeholder="Enter your comment"
        value={commentInput}
        onChange={handleChange} // Update input value
      />
      <button
        onClick={() => {
          handleSubmit(commentInput); // Call handleSubmit with the comment
          setCommentInput(""); // Clear the input field
        }}
        ref={buttonref}
      >
        Submit
      </button>
    </section>
  );
};
