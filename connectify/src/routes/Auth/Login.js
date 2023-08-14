import React from "react";
import { Navigate } from "react-router-dom";
import { useState } from "react";



const Login = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Effectuez ici votre logique d'authentification si nécessaire

    // Mettez à jour l'état pour indiquer que l'utilisateur est connecté
    setLoggedIn(true);
  };

  // Si l'utilisateur est connecté, redirigez-le vers le profil
  if (loggedIn) {
    return <Navigate to="/profil" />;
  }

 

return(

  <div className="connexion">
  <form name="connexion" method="post" className="connexion_form" data-netlifly="true" onSubmit={handleSubmit} >


 <label htmlFor="login">Email: </label>
 <input type="email" name="login" placeholder="Entrez votre email..." required/>

 
 <label htmlFor="password">Mot de passe: </label>
 <input type="password" name="password" placeholder="Entrez votre mot de passe..." required/>

 
 

 <button type="submit"> Connexion</button>

</form>
<p>Pas de compte ? <a href={props.url2}>Inscrivez-vous</a></p>
</div>

);
};


export default Login;