import React from "react";
import gmailImg from '../Images/email.png';
import instaImg from '../Images/instagram.png';
import youtubeImg from '../Images/youtube.png';
import linkedInImg from '../Images/linkedin.png';



function Contact(){

    return(
        <div id="contactRoot">
            
            <div id="socialMediaContainer">

            <a href="mailto:vasagan182002@gmail.com"><img class="socialMediaIcons" alt="gmail-img" src={gmailImg}/></a>
            <a href="https://www.instagram.com/v.a.s.a.g.a.n_/" target="_blank"><img class="socialMediaIcons"  alt="instagram-img" src={instaImg}/></a>
            <a href="https://www.linkedin.com/in/vasagan-bhaskar-24274b218"><img class="socialMediaIcons" alt="linkedIn-img" src={linkedInImg}/></a>
            <a href="https://youtube.com/channel/UCD-LkvljfHY-EuLQnD2ZIyg" target="_blank" ><img class="socialMediaIcons" alt="youtube-img" src={youtubeImg}/></a>
            

            </div>
        </div>
    );
}

export default Contact;