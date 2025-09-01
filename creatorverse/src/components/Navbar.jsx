import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Creatorverse</h1>
      <div className="nav-links">
        <Link to="/">Creators</Link>
        <Link to="/add"> Add Creator</Link>
      </div>
    </nav>
  );
}
