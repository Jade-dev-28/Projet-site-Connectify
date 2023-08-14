import React from "react";
import "../styles/contactForm.css";

function InscriptionForm(props) {

    return (
        <div className="inscription">
            <form name="contact" method="post" className="inscription_form" data-netlifly="true" onSubmit="submit">
                <input type="hidden" name="form-name" value="contact" />


                <div className="name_group">
                    <div className="group1">
                        <label for="firstname">Nom: </label>
                        <input type="text" placeholder="Entrez votre nom"></input>
                    </div>

                    <div className="group2">
                        <label for="name">Prénom: </label>
                        <input type="text" placeholder="Entrez votre nom"></input>
                    </div>
                </div>


                <label for="email">Email: </label>
                <input type="email" name="email" placeholder="Entrez votre email..." />

                <div className="genre"><label for="genre">Genre: </label>
                    <input type="checkbox" /> Homme
                    <input type="checkbox" /> Femme </div>


                <label for="password">Mot de passe</label>
                <input type="password" id="password" placeholder="Entrez votre mot de passe" required></input>

                <label for="password">Vérification de mot de passe</label>
                <input type="password" id="password" placeholder="Entrez votre mot de passe" required></input>

                <button type="submit">Validez</button>

            </form>
            <p>Déja Inscrit ? <a href={props.urlCo}>Connectez-vous</a> </p>

        </div>

    );
}

export default InscriptionForm;