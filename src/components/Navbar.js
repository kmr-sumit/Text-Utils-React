import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.modePassed} bg-${props.modePassed}`}>
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {/* <Link className="nav-link" to="/">{props.homeText} <span className="sr-only">(current)</span></Link>
             */}
             <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li> */}
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
        <div className={`custom-control custom-switch text-${props.modePassed==="light"?"dark":"light"}`}>
          <input type="checkbox" onClick={props.changeMode} className="custom-control-input" id="customSwitch1"/>
          <label className="custom-control-label" htmlFor="customSwitch1">Enable DarkMode</label>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  homeText: PropTypes.string,
  aboutText: PropTypes.string, 
  modePassed: PropTypes.string,
  changeMode: PropTypes.func
};
export default Navbar;
