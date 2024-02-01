import { useContext, useRef } from "react";
import { PostList } from "../Store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionElement = useRef();
  const tagElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionElement.current.value;
    const tags = tagElement.current.value.split(" ");

    userIdElement.current.value = " ";
    postTitleElement.current.value = " ";
    postBodyElement.current.value = " ";
    reactionElement.current.value = " ";
    tagElement.current.value = " ";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        navigate("/");
      });
    // navigate("/"); // // or this remove upper
  };

  return (
    <form className="createpost" onSubmit={handleSubmit}>
      <div className="mb-3 ">
        <label htmlFor="userId" className="form-label">
          User-Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Enter User-No. here"
        />
      </div>

      <div className="mb-3 ">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="Enter Title..."
        />
      </div>

      <div className="mb-3 ">
        <label htmlFor="body" className="form-label">
          Enter Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Enter Your Feelings..."
        />
      </div>
      <div className="mb-3 ">
        <label htmlFor="reactions" className="form-label">
          Enter Your Reactions
        </label>
        <input
          type="text"
          ref={reactionElement}
          className="form-control"
          id="reactions"
          placeholder="Enter Emoji or Reaction in No."
        />
      </div>

      <div className="mb-3 ">
        <label htmlFor="tag" className="form-label">
          Enter your hashtag
        </label>
        <input
          type="text"
          ref={tagElement}
          className="form-control"
          id="tag"
          placeholder="Enter hashtags here"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        POST
      </button>
    </form>
  );
};
export default CreatePost;
