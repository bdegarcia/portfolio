import React from "react";
import '../style.css'

function Nav(){

    return (
        <div id="header" className="container-fluid top">
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">Ben de Garcia</a>
            <header className="navbar" id="navbarSupportedContent">
                <ul className="navbar-nav list-group-horizontal header-links">
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </header>
        </nav>
    </div>
    )
}

export default Nav