export default function Lpost(props) {
  const { setPost, setIsClicked, userId, title, body } = props;
  return (
    <div className="postLayout">
      <h1>{`${userId}. ${title}`}</h1>
      <p>{body.slice(0, 85)}...</p>
      <button
        onClick={() => {
          setIsClicked(true);
          setPost(userId);
        }}
      >
        Read More
      </button>
    </div>
  );
}
