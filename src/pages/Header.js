import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../components/images/logo.png";


export default function Header() {
    return (
        <header>
            <nav className="shadow navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="" width="60" height="40" class="d-inline-block align-text-top" />
                        Visualizer
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/add">Add</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};