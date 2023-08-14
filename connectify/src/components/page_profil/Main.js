//import React from "react";
import React, { useState } from "react";
import "../../components/styles/page_profil/main.css";
import "../page_profil/SectionWall";
import SectionWall from "../page_profil/SectionWall";
import SectionGallery from "./SectionGallery";
import SectionVideo from "./SectionVideo";
import SectionMusic from "./SectionMusic";


function Main() {
  const categories = [

    {
      id: "All",
      name: "All",

    },
    {
      id: "Wall",
      name: "My Wall",
      description: "Contenu wall",

    },
    {
      id: "Gallery",
      name: "Gallery",
      description: "Contenu Gallery",
    },
    {
      id: "Video",
      name: "Video",
      description: "Video",
    },
    {
      id: "Music",
      name: "Music",
      description: " contenu Music",
    },
  ];

  const [activeTab, setActiveTab] = useState(categories[0].id);

  const handleTabClick = (categoryId) => {
    setActiveTab(categoryId);
  };

  

  return (
    <div className="mainProfil">
      <div className="tab">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`tablinks ${
              activeTab === "All" || activeTab === category.id ? "active" : ""
            }`}
            onClick={() => handleTabClick(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="tabcontent-container">
        {categories.map((category) => (
          <div
            key={category.id}
            id={category.id}
            className={`tabcontent ${
              activeTab === "All" || activeTab === category.id ? "active" : ""
            }`}
          >
            <h3>{category.name}</h3>
            {activeTab === "All" && (
              <div>
                {category.id === "Wall" && <SectionWall />}
                {category.id === "Gallery" && <SectionGallery />}
                {category.id === "Video" && <SectionVideo />}
                {category.id === "Music" && <SectionMusic />}
              </div>
            )}
            {activeTab === category.id && (
              <div>
                {category.id === "Wall" && <SectionWall />}
                {category.id === "Gallery" && <SectionGallery />}
                {category.id === "Video" && <SectionVideo />}
                {category.id === "Music" && <SectionMusic />}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;