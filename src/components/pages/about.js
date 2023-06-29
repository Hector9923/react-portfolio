import React from "react";
import profilePicture from "../../../static/assets/images/bio/aboutmeimage.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div className="left-column">
        <img
          style={{
            width: "1000px",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          src={profilePicture}
          alt="Profile Picture" />
      </div>
      <div className="right-column">
        Hola! soy Hector Sanchez, soy un desarollador junior full-stack e intérprete bilingüe (Inglés y Español)
      </div>
    </div>
  );
}