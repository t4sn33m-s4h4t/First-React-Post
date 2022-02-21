import { useEffect, useState } from "react";

export default function (props) {
  const [pd, setPd] = useState({
    userId: "",
    id: "",
    Sid: "",
    title: "",
    body: ""
  });
  const [postID, setPostId] = useState(props.post);

  useEffect(() => {
    const loadposts = async () => {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postID}`
      );
      const data = await resp.json();
      data["Sid"] = data.id + ". ";
      setPd(data);
    };
    loadposts();
  }, [postID]);

  return (
    <div className="singlePostLayout">
      <div>
        <h1>{pd.Sid + pd.title}</h1>

        <p>{pd.body}</p>
        <button
          onClick={() => {
            setPostId(postID - 1);
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setPostId(postID + 1);
          }}
        >
          Next
        </button>
        <div
          onClick={() => {
            props.setIsClicked(false);
          }}
          className="goBack"
        >
          ←
        </div>
      </div>
    </div>
  );
}
