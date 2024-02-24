import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useEffect, useState } from "react";
import axios from "axios";
import formatDate from "../utils/formatDate";
const PostCommentView = ({ comment }) => {
  const [author, setAuthor] = useState({});
  const authorId = comment.author_id;

  useEffect(() => {
    const fetchAuthor = async () => {
      const { data: response } = await axios.get("/auth/get-user-by-id", {
        params: {
          id: authorId,
        },
      });
      setAuthor(response[0]);
    };

    fetchAuthor();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <IconContext.Provider value={{ size: 45 }}>
        <hr />
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <span>
            <FaUserCircle />
          </span>
          <span className="ms-2">
            <span>{author.name ? author.name : "John Doe"}</span>
            <p className="text-muted">{formatDate(comment.date) ? formatDate(comment.date) : "23/02/2024"}</p>
          </span>
        </div>
        <p>{comment.content ? comment.content : "You are worth it!"}</p>
      </IconContext.Provider>
    </>
  );
};

export default PostCommentView;
