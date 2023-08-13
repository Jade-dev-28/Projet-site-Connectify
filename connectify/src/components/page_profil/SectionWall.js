import React, { useState } from "react";
import { Icon } from '@iconify/react';
import "../styles/page_profil/main.css";

function SectionWall() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handlePostClick = () => {
    // Simulate posting the text and image to another section
    console.log("Text:", text);
    console.log("Image:", image);
    // Reset the form
    setText("");
    setImage(null);
  };

  const handleImageIconClick = () => {
    // Trigger the input file click when the image icon is clicked
    document.getElementById("imageInput").click();
  };

  return (
    <div className="wall">

    <div className="section_preview">
    <h2>aperçu</h2>
        {image && <img src={URL.createObjectURL(image)} alt="Uploaded" />}
        <div className="preview">
        <p>{text}</p>
        </div>
        
      </div>
      <div className="wallText">
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Ecrivez un message..."
        />
        <div>
          <label htmlFor="imageInput" className="iconWrapper">
            <Icon
              icon="ic:sharp-download-for-offline"
              color="#daca3b"
              width="60"
              height="60"
              onClick={handleImageIconClick}
            />
          </label>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
        <Icon icon="fa:send" color="white" width="60" height="60" />
        <button onClick={handlePostClick}>Post</button>
      </div>
    </div>
  );
}


export default SectionWall;
