import React, { useEffect, useState } from "react";
import { CustomDialog } from "react-st-modal";
import "../App.css";
import DetailDialog from "./DetailDialog";

const Projects = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/faridulhaque/My-json-data/main/myportfolio_data.json")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  const handleDetail = async (d) => {
    const result = await CustomDialog(
      <DetailDialog info={d}></DetailDialog>,
      {
        title: `Details for ${d.name}`,
        showCloseIcon: true,
      }
    );
  };

  return (
    <>
      <h1 className="text-center text-4xl text-primary my-10">My Projects</h1>
      <div id="projects" className="projects my-10">
        {data.map((d) => (
          <div className="card w-96 bg-base-100 single-project" key={d.id}>
            <figure className="px-10 pt-10">
              <img src={d.image} alt="screenShot" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{d.name}</h2>
              <p>{d?.description}</p>
              <div className="card-actions">
                <a
                  href={d.live}
                  target="_blank"
                  className="btn btn-primary text-white"
                >
                  Live site
                </a>
                <button
                  onClick={() => handleDetail(d)}
                  className="btn btn-secondary text-white"
                >
                  View Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
