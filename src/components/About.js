import React from "react";
import htmlImg from '../Images/html.png'
import cssImg from '../Images/css.png'
import jsImg from '../Images/js-img.png'
import reactImg from '../Images/react-img.png'
import javaImg from '../Images/java-png.png'

function About() {
    return (
        <div id="about" class="about">
            <h4 id="aboutHeading">About</h4>

            <div id="aboutPara">
                <p id="aboutParaContent">
                    Currently pursuing my final year of computer science and engineering.
                    I Am an Resourceful individual interested in designing and developing software
                    applications, focusing on integrating field based developments in my
                    working to develop my organisation and to scale up my progress with steady
                    source of motivation and unique way of execution.
                </p>
            </div>

            {/* <button type="button"  class="btn btn-sm resume-btn btn-outline-success"><a class="aTags" href="VASAGAN B RESUME V1.15.pdf" target="_blank">Download Resume</a></button> */}
            <div class="known-lang">
                <h6 id="kl-txt">Tools Known</h6>

            <div class="known-lang-img">
                <img class="about-images" alt="html-png" src={htmlImg}></img>
                <img class="about-images" alt="css-png" src={cssImg}></img>
                <img class="about-images" alt="html-png" src={jsImg}></img>
                <img class="about-images" alt="html-png" src={reactImg}></img>
                <img class="about-images" alt="java-png" src={javaImg}></img>

            </div>
                
            </div>

        <script>

        </script>
        </div>
    );
}

export default About;