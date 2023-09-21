import React from "react";
import { HeroBanner } from "./heroBanner";
import { Popular } from "./popular";
import "./style.scss";
import { TopRated } from "./topRated";
import { Trending } from "./trending";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
