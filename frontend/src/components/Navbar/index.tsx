import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import './styles.css'
function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>Avalie seu filme favorito!</h1>
          <a href="https://github.com/cielio" target="_blank" rel="noreferrer">
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/cielio</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;