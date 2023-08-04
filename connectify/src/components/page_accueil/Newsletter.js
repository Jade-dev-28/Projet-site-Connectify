import React from "react";
import "../styles/newsletter.css";



function Newsletter(props){
    return (
        <div className="container">
        <form className="news" method="post">
        <div className="texteNews">
                <h2>{props.title}</h2>
                <p>{props.texte}</p>
            </div>
            <input type="text" placeholder="Entrez votre email..." name="mail" required></input>
            <button type="submit">Validez</button>
        </form>
        </div>
    );
    
    }
    export default Newsletter;