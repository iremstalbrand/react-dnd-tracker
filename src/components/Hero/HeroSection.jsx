import './HeroSection.css'
import image from '../../assets/hero-banner.jpg'

export default function HeroSection() {
   return (
    <section className="hero-container">
        <img className="hero-image" src= {image} alt="d&d party "/>
       <div className="hero-overlay"></div>
          <div className="hero-content">
              <p className= "hero-subtitle"> x Welcome, adventurer x</p>
              <h2 className= "hero-title"> TEST</h2>
              <p className = "hero-description"> Create your characters, assemble your party, prepare for adventure.</p>
            <div className= "hero-buttons">
              <button className="create-btn"> + Create new character</button>
              <button className="view-btn">View characters</button>
            </div>
          </div>
      </section>
   )
}