import "../styles/page_profil/main.css";
import React, { useState } from "react";
import gallery1 from "../../assets/media_profil/gallery1.jpg";
import gallery2 from "../../assets/media_profil/gallery2.jpg";
import gallery3 from "../../assets/media_profil/gallery3.png";
import gallery4 from "../../assets/fd_qsn.jpg";


function SectionGallery() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalImageAlt, setModalImageAlt] = useState("");

  const openModal = (src, alt) => {
    setModalImageSrc(src);
    setModalImageAlt(alt);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="gallery">
      {/* Trigger the Modal */}
      <div className="ligne1_img">
        <img
          src={gallery1}
          alt="image1"
          style={{ width: "100%", maxWidth: "300px", cursor: "pointer" }}
          onClick={() => openModal(gallery1, "Image 1")}
        />
        <img
          src={gallery2}
          alt="image2"
          style={{ width: "100%", maxWidth: "300px", cursor: "pointer" }}
          onClick={() => openModal(gallery2, "Image 2")}
        />
      </div>

      <div className="ligne2_img">
        <img
          src={gallery3}
          alt="image3"
          style={{ width: "100%", maxWidth: "300px", cursor: "pointer" }}
          onClick={() => openModal(gallery3, "Image 3")}
        />
        <img
          src={gallery4}
          alt="image4"
          style={{ width: "100%", maxWidth: "300px", cursor: "pointer" }}
          onClick={() => openModal(gallery4, "Image 4")}
        />
      </div>

      {/* The Modal */}
      {modalVisible && (
        <div className="modal">
          {/* The Close Button */}
          <span className="close" onClick={closeModal}>
            &times;
          </span>

          {/* Modal Content (The Image) */}
          <img
            className="modal-content"
            src={modalImageSrc}
            alt={modalImageAlt}
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking on the image
          />

          {/* Modal Caption (Image Text) */}
          <div id="caption">{modalImageAlt}</div>
        </div>
      )}
    </div>
  );
}




export default SectionGallery