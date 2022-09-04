import React from "react";
import WR_homeSS_video from '../Images/WinddownRestaurant Home ss.png';
import apiThumbnail from '../Images/apiThumbnail.jpeg';
import dockerThumbnail from '../Images/dockerThumbnail.jpeg';
import vsThumbnail from '../Images/vsThumbnail.jpeg';


function Videos() {
    return (
        <div id="videosRoot">

            <h5 id="checkMyVideosTxt">Check out these videos made by me about Full Stack Development</h5>

            <div id="videosDiv">
                <div className="card videosCard" style={{ width: "18rem" }}>
                    <img src={vsThumbnail} className="card-img-top" alt="video_1-thumbnail" />
                    <div className="card-body">
                        <h5 className="card-title">VS setup</h5>
                        <p className="card-text">Setting up Visual Studio and running a simple C# program.</p>
                        <a href="https://youtu.be/2fD3tnM8gRA" target="_blank" className="btn btn-primary">Watch Now</a>
                    </div>
                </div>

                <div className="card videosCard" style={{ width: "18rem" }}>
                    <img src={apiThumbnail} className="card-img-top" alt="video_2-thumbnail" />
                    <div className="card-body">
                        <h5 className="card-title">What is API</h5>
                        <p className="card-text">Understanding API's with an todo-list full-stack application.</p>
                        <a href="https://youtu.be/LQoxR2zMKyw" target="_blank" className="btn btn-primary">Watch Now</a>
                    </div>
                </div>

                <div className="card videosCard" style={{ width: "18rem" }}>
                    <img src={dockerThumbnail} className="card-img-top" alt="video_3-thumbnail" />
                    <div className="card-body">
                        <h5 className="card-title">Minikube & Docker</h5>
                        <p className="card-text">Orchestrating a full-stack application on minikube as dockers.</p>
                        <a href="https://youtu.be/tAwkj9YZ1SU" target="_blank" className="btn btn-primary">Watch Now</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Videos;