import "./About.css";
import image from "../../assets/About.jpg";

// REVIEW: The about content is absolutely positioned over an image. On small
// viewports or when text is long, the content can overflow below the image
// boundary and become clipped/invisible. The mobile breakpoint switches to
// relative positioning (good), but the desktop layout has no min-height
// guarantee that the image is tall enough to contain the text.
export default function About() {
  return (
    <section className="about-section">
      <img className="about-image" src={image} alt="d&d party" />
      <div className="about-overlay"></div>
      <div className="about-content">
        <div className="about-block">
          <h2>What is this?</h2>
          <p>
            The Forge is a character management tool for Dungeons and Dragons
            5th Edition. Both players and Dungeon Masters can create, edit, and
            organize characters in one place with stats, spells, and
            backstories.
          </p>
        </div>
        <div className="about-block">
          <h2>New to DnD?</h2>
          <p>
            Dungeons and Dragons is a tabletop role-playing game where players
            create characters and embark on adventures guided by a Dungeon
            Master. Each character has a race (like Elf or Dwarf), a class (like
            Wizard or Fighter), and six ability scores that define their
            strengths: Strength, Dexterity, Constitution, Intelligence, Wisdom,
            and Charisma.
          </p>
        </div>
        <div className="about-block">
          <h2>How to use</h2>
          <p>
            Navigate to New Character to create your first adventurer. Choose a
            race and class, assign your stats, pick your spells, and write a
            backstory. Your characters appear on the Characters page where you
            can edit or remove them anytime.
          </p>
        </div>
        <div className="about-block">
          <h2>Data</h2>
          <p>
            All race, class, and spell data is fetched from the open-source DnD
            5e API. Character data is stored locally in your browser session and
            does not persist on refresh.
          </p>
        </div>
      </div>
    </section>
  );
}
