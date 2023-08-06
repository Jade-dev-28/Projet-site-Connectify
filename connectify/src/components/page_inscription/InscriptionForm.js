import React from "react";
import "../styles/contactForm.css";

function InscriptionForm () {

    return(
        <div className="contact">
             <form name="contact" method="post" className="contact_form" data-netlifly="true" onSubmit="submit">
             <input type="hidden" name="form-name" value="contact" />
         
            <label for="email">Email: </label>
            <input type="email" name="email" placeholder="Entrez votre email..."/>
      
            <label for="sujet">Sujet: </label>
            <textarea name="sujet" placeholder="Sujet de votre message..."></textarea>

          
            <button type="submit">Validez</button>
          
        </form>
        </div>

    );
}

export default InscriptionForm;