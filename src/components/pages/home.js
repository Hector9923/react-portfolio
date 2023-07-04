import React from "react";

import PortfolioContainer from "../portfolio/portfolio-container";

export default function () {
  return (
    <div>
      <div className="home-title">
        <h1>Projects I've built</h1> <h3>Including this portfolio that makes API calls!</h3>
      </div>
      <PortfolioContainer />
    </div>
  );
}