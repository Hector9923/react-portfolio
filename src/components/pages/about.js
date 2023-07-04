import React from "react";
import profilePicture from "../../../static/assets/images/bio/aboutmeimage.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div className="left-column">
        <img
          style={{
            width: "700px",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          src={profilePicture}
          alt="Profile Picture" />
      </div>
      <div className="right-column">
        Hey there! I'm Hector Sanchez, a junior front-end developer, I work at a start-up company building sites and web apps for a community in Mexico and I also work as a freelancer for any job you may need, you can hire me through my contact information.
      </div>
    </div>
  );
}