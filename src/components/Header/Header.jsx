import "./Header.css";
import logo from "../../assets/dnd-logo.svg";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-logo">
        <img src={logo} alt=" Test logo" />
        <h1>Test</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/characters">Characters</NavLink>
          <NavLink to="/create">New Character</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>
      </nav>
    </header>
  );
}
