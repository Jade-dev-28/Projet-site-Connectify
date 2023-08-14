
import '../styles/bienv.css'

import React, { useState, useEffect } from 'react';

function Bienv() {

  const translations = {
    fr: "Bienvenue",
    en: "Welcome",
    es: "Bienvenido",
    de: "Willkommen",
    ukr: "дякую",
    bgd: "স্বাগত",
    zh: "欢迎光临",
    dz:'مرحباً',
    he:"ברוך הבא",
    jp:"いらっしゃいませ",
    kb:"Anṣuf yis-wen",
    az:"ⴰⵏⵚⵓⴼ ⵢⵉⵙ ⵡⴻⵏ",
    
  };
  
    const [currentLanguage, setCurrentLanguage] = useState("fr");
  
    useEffect(() => {
      // Appel de la fonction toutes les 1 seconde
      const interval = setInterval(changeLanguage, 1000);
  
      // Nettoyage du setInterval lorsque le composant est démonté
      return () => clearInterval(interval);
    }, [currentLanguage]);
  
    function changeLanguage() {
      const languages = Object.keys(translations);
      const nextIndex = (languages.indexOf(currentLanguage) + 1) % languages.length;
      const nextLanguage = languages[nextIndex];
      setCurrentLanguage(nextLanguage);
    }


    return( 
        <div className='bienvenue'>
           <h2>{translations[currentLanguage]}</h2>
           <p>"Harmonisez vos passions, partagez vos émotions avec Connectify !"</p>
        </div>
    );
}

export default Bienv;