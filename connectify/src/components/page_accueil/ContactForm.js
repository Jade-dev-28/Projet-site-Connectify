import React from "react";
import "../styles/contactForm.css";

function ContactForm () {

    return(
        <div className="contact">
             <form name="contact" method="post" className="contact_form" data-netlifly="true" onSubmit="submit">
             <input type="hidden" name="form-name" value="contact" />
         
            <label for="email">Email: </label>
            <input type="email" name="email" placeholder="Entrez votre email..."/>
         

      
            <label for="sujet">Sujet: </label>
            <textarea name="message" placeholder="Sujet de votre message..."></textarea>
          
          
            <label for="message" >Message: </label>
            <textarea style={{height:"150px"}} name="message" placeholder="Entrez votre message..."></textarea>
          

          
            <button type="submit">Validez</button>
          
        </form>
        </div>

    );
}

export default ContactForm;