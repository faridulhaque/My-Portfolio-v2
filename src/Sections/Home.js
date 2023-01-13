import React from "react";
import Banner from "./Banner";
import Mine from "./Mine";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className='mb-20'>
      <Banner></Banner>
      <Projects></Projects>
      <Mine></Mine>
    </div>
  );
};

export default Home;
