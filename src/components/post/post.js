import { useState, useEffect } from "react";
import Lpost from "./Lpost";
import SinglePost from "./SinglePost";

export default function Post() {
  const [isClicked, setIsClicked] = useState(false);
  let [postData, setPostData] = useState([]);
  let [post, setPost] = useState(0);
  useEffect(() => {
    const loadposts = async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await resp.json();
      setPostData(data);
    };
    loadposts();
  }, []);

  return (
    <div>
      {isClicked ? (
        <SinglePost setIsClicked={setIsClicked} post={post} />
      ) : (
        postData.map((post) => (
          <div>
            <Lpost
              setIsClicked={setIsClicked}
              userId={post.id}
              title={post.title}
              body={post.body}
              setPost={setPost}
            />
          </div>
        ))
      )}
    </div>
  );
}
