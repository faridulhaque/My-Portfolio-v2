import React from "react";

const Banner = () => {
  return (
    <div
      id="banner"
      className="hero min-h-screen"
      style={{ backgroundImage: "url(https://i.ibb.co/RTGDncw/banner.png)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">I am Faridul Haque!</h1>
          <p className="mb-5 banner-text">
            I am a self-motivated front-end developer with good knowledge of
            HTML, CSS, JavaScript, and one of the most popular JavaScript
            frameworks React.
            <br></br>I started learning web development in January 2022 and I
            already learned those I mentioned above. My next target is to learn
            Redux, Typescript, and Next JS.
          </p>
          <a href="resume_12_9_22.pdf" className="btn btn-primary mr-2" download>
            Download Resume
          </a>
          <a
            href="https://github.com/faridulhaque"
            target="_blank"
            className="btn btn-secondary ml-2"
          >
            See my github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
