import React from "react";
import "../styles/page_profil/header.css"
import photoProfil from "../../assets/media_profil/photo-profil.png";


function Header() {
    return (

        <div>

            <div className="header_profil">
                <div className="containerProfil">

                    <div className="photoPf">
                        <img src={photoProfil} />
                    </div>

                    <p>SAINT-ANGE</p>
                    <p>Jade</p>




                </div>

            </div>
        </div>

    );

}

export default Header;