import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="welcome">
      <h1>
        To see all the posts first of all you have to login in our site. You can
        log in from
        <br></br>
        <Link to="/login">Here.</Link>
      </h1>
    </div>
  );
}
