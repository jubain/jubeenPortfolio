import React from "react";
import "./model.css";

const Model = (props) => {
  return (
    <div className="container">
      <div className="imageContainer">
        <img src={props.image} alt="image" />
      </div>
      <div className="descContainer">
        <p>{props.desc}</p>
      </div>
      <div>
        <button>Link</button>
      </div>
    </div>
  );
};

export default Model;
