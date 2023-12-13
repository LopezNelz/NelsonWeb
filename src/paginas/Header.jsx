import "bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col">
          <Link to="/">
            <img src={logo} alt="InfoPro" width={200} />
          </Link>
        </div>
        <div className="col">
          <ul className="nav navbar d-flex justify-content-end align-items-center">
            <li className="nav-item">
              <Link className="nav-link btn btn-light text-dark btn-animation" aria-current="page" to="/">Inicio</Link>
            </li>
            <Dropdown>
              <Dropdown.Toggle className="nav-link btn btn-light text-dark btn-animation" id="dropdown-basic">
                Biografias
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} className="nav-link btn btn-light text-dark btn-animation2" to="AdaLovelace">Ada Lovelace</Dropdown.Item>
                <Dropdown.Item as={Link} className="nav-link btn btn-light text-dark btn-animation2" to="AlanTuring">Alan Turing</Dropdown.Item>
                <Dropdown.Item as={Link} className="nav-link btn btn-light text-dark btn-animation2" to="DennisRitchie">Dennis Ritchie</Dropdown.Item>
                <Dropdown.Item as={Link} className="nav-link btn btn-light text-dark btn-animation2" to="BajarneStroustrup">Bajarne Stroustrup</Dropdown.Item>
                <Dropdown.Item as={Link} className="nav-link btn btn-light text-dark btn-animation2" to="TimBernersLee">Tim Berners Lee</Dropdown.Item>
                <Dropdown.Item as={Link} className="nav-link btn btn-light text-dark btn-animation2" to="AlanCooper">Alan Cooper</Dropdown.Item>
                <Dropdown.Item as={Link} className="nav-link btn btn-light text-dark btn-animation2" to="LinusTorvalds">Linus Torvalds</Dropdown.Item>
                <Dropdown.Item as={Link} className="nav-link btn btn-light text-dark btn-animation2" to="SteveJobs">Steve Jobs</Dropdown.Item>
                <Dropdown.Item as={Link} className="nav-link btn btn-light text-dark btn-animation2" to="BillGates">Bill Gates</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <li className="nav-item">
              <Link className="nav-link btn btn-light text-dark btn-animation" aria-current="page" to="Creditos">Créditos</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;