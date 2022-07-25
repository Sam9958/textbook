
import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand mx-2" href="/">{props.title}</a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
        
        <div className="form-check form-switch mx-4 ">
          <input className="form-check-input " onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className={`form-check-label text-${props.mode==="dark"?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode==="dark"?"light":"dark"} Mode</label>
        </div>
        <div className="form-check form-switch mx-2 ">
          <input className="form-check-input " onClick={props.togglemode2} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light"?"primary":"light"}</label>
        </div>
      </div>
    </nav>
  )
}


