import React from "react";
import logo from "../public/assets/img/logo.png";
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
    <Navbar className="nav-fill w-100 navbar-dark bg-dark">
        <Navbar.Brand href="/" >
            <img
                src={logo}
                alt="logo-afp-modelo"
            />
        </Navbar.Brand>
    </Navbar>
);

export default Header;