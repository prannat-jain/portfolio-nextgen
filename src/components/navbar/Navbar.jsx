import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="social">
          <a href="https://www.linkedin.com/in/prannat-jain">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.github.com/prannat-jain">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
