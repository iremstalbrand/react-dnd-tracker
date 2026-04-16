import "./HeroSection.css";
import image from "../../assets/hero-banner.jpg";
import { Link } from "react-router";

export default function HeroSection() {
  return (
    <section className="hero-container">
      <img className="hero-image" src={image} alt="d&d party " />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-subtitle"> ✦ Welcome, adventurer ✦ </p>
        <p className="hero-description">
          {" "}
          Create your characters, assemble your party, prepare for adventure.
        </p>
        {/* REVIEW: Nesting <button> inside <Link> (which renders an <a>) produces
            invalid HTML — interactive elements must not be nested. Use <Link>
            with className="create-btn" directly (styled as a button), or use
            useNavigate() with a plain <button onClick>. */}
        <div className="hero-buttons">
          <Link to="/create">
            <button className="create-btn" aria-label="Create new character">
              {" "}
              + Create new character
            </button>
          </Link>
          <Link to="/characters">
            <button className="view-btn" aria-label="View all characters">
              View characters
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
