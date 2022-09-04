import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import titleLogo from '../Images/TITLE-LOGO.png';

function Navigation() {
    return (

        <div class="container-fluid sticky-top">

            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#"><img id="titleLogo" alt="title-Logo-png" src={titleLogo}></img></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#projects_Root">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contactRoot">Contact</a>
                        </li>
                    </ul>

                </div>
            </nav>

        </div>

    )
}

export default Navigation;

