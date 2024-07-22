import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./css/navBar.css";

export default function NavBar() {
  return (
    <nav className="navBar">
      <Link to="/" className="title-home">
        Home
      </Link>
      <ul>
        <Content to="/register">Register</Content>
        <Content to="/Login" className="title-login">
          Log In
        </Content>
      </ul>
    </nav>
  );
}

function Content({ to, children, ...props }) {
  const resolved = useResolvedPath(to);
  const isActive = useMatch({ path: resolved.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
