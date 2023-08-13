import React from 'react'
import video_profil from '../../media/video_profil.mp4';
import "../styles/page_profil/main.css";

function SectionVideo() {
    return (

        <div>
             <video id="myVideo"  autoPlay loop>
            <source src={video_profil} type="video/mp4"/>
            </video>

            

        </div>
    );

}

export default SectionVideo;