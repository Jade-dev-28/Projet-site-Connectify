import React from 'react'
import '../styles/bienv.css'


//import React, { useState, useEffect } from 'react';

{/*const translations = {
  fr: "Bienvenue",
  en: "Welcome",
  es: "Bienvenido",
  de: "Willkommen",
  // Ajoutez autant de langues que nécessaire
};

function ChangeLanguageComponent() {
    <div className="bienvenue">
  const [currentLanguage, setCurrentLanguage] = useState("fr");

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeLanguage();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function changeLanguage() {
    const languages = Object.keys(translations);
    const nextIndex = (languages.indexOf(currentLanguage) + 1) % languages.length;
    const nextLanguage = languages[nextIndex];
    setCurrentLanguage(nextLanguage);
  }

  return (
    <div>
      <p id="welcome-text" data-lang={currentLanguage}>
        {translations[currentLanguage]}
      </p>
    </div>

    </div>
  );
}

export default ChangeLanguageComponent;*/}




function Bienv(props) {
    return( 
        <div className='bienvenue'>
           <h2>{props.title}</h2>
           <p>"Harmonisez vos passions, partagez vos émotions avec Connectify !"</p>
        </div>
    );
}

export default Bienv;