import React from "react";
import "../../../assets/css/custom.css";

const Card = (props) => {
   return (
    <div className="card">
      <div className="container">
        <h4>
          <b>{props.name}</b>
        </h4>
        <p>{props.phone}</p>
        <input
          type="text"
          value={props.name}
          onChange={props.onChangeName}
        ></input>
        <p>
          <button className="button button-red" onClick={props.onDelete}>
            Delete
          </button>
        </p>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
