import React from "react";
import music from "../../media/afrobeat.mp3";
import cocoa from "../../media/afromusic.mp3";
import image1 from "../../assets/media_profil/gallery1.jpg";

function SectionMusic() {
    return (
        <div>
            <div className="music1">
                <div className="image">
                    <img src={image1} />
                </div>
                <div className="audio">
                    <p>It Afrobeat - RoyaltyFreeMusic</p>
                    <audio controls>
                        <source src={music} type="audio/mp3" />
                    </audio>
                </div>

            </div>

            <div className="music1">
                <div className="image">
                    <img src={image1} />
                </div>
                <div className="audio">
                    <p>Ccocoa butter - Afro Dancehall</p>
                    <audio controls>
                        <source src={cocoa} type="audio/mp3" />
                    </audio>
                </div>

            </div>

        </div>

    );
}

export default SectionMusic;

