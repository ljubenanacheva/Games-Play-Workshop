import { useForm } from "../../../hooks/useForm.js";

export const AddComment = ({ onCommentSubmit }) => {
  const { values, changeHadler, onSubmit } = useForm(
    {
      comment: "",
    },
    onCommentSubmit
  );
  return (
    <article className="create-comment">
      <label>Add new comment:</label>
      <form className="htmlform" method="POST" onSubmit={onSubmit}>
        <textarea
          name="comment"
          placeholder="Comment......"
          value={values.comment}
          onChange={changeHadler}
        ></textarea>
        <input className="btn submit" type="submit" value="Add Comment" />
      </form>
    </article>
  );
};
