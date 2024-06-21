import React from "react";

import PortfolioContainer from "../portfolio/portfolio-container";

export default function () {
  return (
    <div>
      <div className="home-title">
        <h2> Projects I've built including this portfolio that makes a GET request to fetch the projects from this <a href="https://devcamp.space/project/portfolio/data/portfolio_items">API</a>!</h2>
        <h3>I am also constantly collaborating in Whistle Coding projects <a href="https://whistlecoding.com" target="_blank" rel="noopener noreferrer">whistlecoding.com</a>
        </h3>
      </div>
      <PortfolioContainer />
    </div>
  );
}