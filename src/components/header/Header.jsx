import './Header.css'
import logo from '../../assets/dnd-logo.svg'

export default function Header() {

  return (
    <header className="header-container">
      <div className ="header-logo">
        <img src= {logo} alt=" Test logo"/>
      <h1>Test</h1>
      </div>
        <nav>
          <ul className = "nav-links"> 
            <li>Home</li>
            <li>Characters</li>
            <li>New Character</li>
            <li>Details</li>    
          </ul>
        </nav>
    </header>  
  )
}