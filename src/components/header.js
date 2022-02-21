import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="navbar">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
}
