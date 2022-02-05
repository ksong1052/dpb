import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div classNameName="header" id="home">
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 border-bottom fixed-top">
        <div className="container-fluid">         
          <h2><a className="navbar-brand fs-2 text-center" href="#">
            <FontAwesomeIcon icon={faLaptopCode} className="fa-sm" />            
            &nbsp; Daniel's <span className="text-primary">Life</span>
          </a></h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 text-center">
              <li className="nav-item">
                <a className="nav-link active text-primary" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>              
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>              
            </ul>            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
