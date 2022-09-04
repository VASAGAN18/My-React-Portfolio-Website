import React from "react";
import image from '../Images/homeImage.png'


function Home() {

    return (
        
        <div class="row">

            <div className="divleft col-lg-6">
                <p id="welcome">Welcome,</p>
                <p id="iam-txt"><span id="iam">I Am</span> <span id="vasagan">Vasagan B</span></p>
                <p id="designation">Student |  Computer Science Major</p>

                <p id="inspiredIn">Inspired in,</p>
                <p id="d_d-txt">Designing & Developing</p>
                <p id="soft-apps">Software Applications</p>

                <a href="#contactRoot"><button id="home-button">Contact</button></a>

            </div>
            <div style={{padding: 0}} className="divright col-lg-6">

                <img id="homeImg" alt="home-img" src={image}></img>
            </div>

        </div>


    )
}

export default Home;