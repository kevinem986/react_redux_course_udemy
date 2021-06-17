import React, { Component } from "react";
import "../../../assets/css/custom.css";

class Card extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("Card js getDerivedStateFromProps", props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("Card js shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("Card js getSnapshotBeforeUpdate");
    return {message: 'some snapshot'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Card js componentDidUpdate", snapshot);
  }

  render() {
    console.log("Card js rendering");
    return (
      <div className="card">
        <img src={this.props.avatar} alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h4>
            <b>{this.props.name}</b>
          </h4>
          <p>{this.props.title}</p>
          <input
            type="text"
            value={this.props.name}
            onChange={this.props.onChangeName}
          ></input>
          <p>
            <button className="button button-red" onClick={this.props.onDelete}>
              Delete
            </button>
          </p>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Card;
