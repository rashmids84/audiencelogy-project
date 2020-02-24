import React , {Component} from 'react';
import { Link } from 'react-router-dom';
// import "../styles/panels/header.scss";
// import "../styles/panels/logo.scss";

function Navbar() {
    return (
    <React.Fragment>
    <nav className="navbar navbar-header navbar-header-fixed">
       
        <div className="navbar-brand">
            <a href="index" className="df-logo">audience<span>logy</span></a>
        </div>
    </nav>
    </React.Fragment>
)
}
export default Navbar;