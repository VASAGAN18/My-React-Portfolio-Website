import React from "react";
import WR_homeSS from '../Images/restaurantWinddown home ss.png';
import projectImg_2 from '../Images/Project-2.png';
import projectImg_3 from '../Images/Project-3.png';

function Projects() {
    return (

        <div id="projects_Root">
            <h4 id="projectsHeading">Projects</h4>

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner" align="center">
                    <div class="carousel-item active">
                        <h5 class="project-heading">An Front-end Website for a Restaurant, built with HTML, CSS & JS</h5>
                        <img class="project-image" src={WR_homeSS} alt="project-1-img" />
                        
                    </div>
                    <div class="carousel-item">
                        <h5 class="project-heading">An E-Commerce mobile application with Firebase Authentication.</h5>
                        <img class="project-image" src={projectImg_2} alt="project-2-img" />
                    </div>

                    <div class="carousel-item">
                        <h5 class="project-heading">An Gardening mobile application with Firebase Authentication.</h5>
                        <img class="project-image" src={projectImg_3} alt="project-3-img" />
                    </div>

                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" >
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    );
}

export default Projects;