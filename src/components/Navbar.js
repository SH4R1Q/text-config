import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar ${props.mode==='light'?'bg-body-tertiary':'navbar-dark bg-dark'} fixed-top`}>
    <div className="container-fluid">
    <a className="navbar-brand" href="#">Text-Config</a>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.handleMode}/>
  <label className="form-check-label" style={props.mode==='dark'?{color:'white'}:{color:'black'}} htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable Dark Mode':'Enable Light Mode'}</label>
  </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`offcanvas ${props.mode==='light'?'offcanvas-end':'offcanvas-end text-bg-dark'}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">{props.title}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" href="/about">About</Link>
          </li> */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Contact
            </a>
            <ul className={`dropdown-menu ${props.mode==='dark'?'dropdown-menu-dark':''}`}>
              <li><a className="dropdown-item" href="https://github.com/SH4R1Q" target='_blank'>Git-Hub</a></li>
              <li><a className="dropdown-item" href="https://www.linkedin.com/in/shariq-khan-28772b1b4/" target='_blank'>LinkedIn</a></li>
              <li><a className="dropdown-item" href="https://instagram.com/_shariq.khan?igshid=YmMyMTA2M2Y=" target='_blank'>Instagram</a></li>
              <li><a className="dropdown-item" href="mailto:shariqahmadkhan31@gmail.com" target='_blank'>Send Mail</a></li>
            </ul>
          </li>
        </ul>
        {/* <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </div>
</nav>
  );
}

//Navbar.propTypes={title: PropTypes.string};//now it will give error if anything rather than string is passed
Navbar.propTypes={title: PropTypes.string.isRequired};//will give error if title is not given
//we can set default prop values here
// Navbar.defaulrProps = {
//     title : "title here"
// };