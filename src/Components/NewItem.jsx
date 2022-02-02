import React, { Component } from "react";

export class NewItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div
        className="card"
        style={{
          width: "18rem",
          color: "white",
          backgroundColor: "black",
          borderRight: "1px solid violet",
          borderLeft: "1px solid green",
          borderBottom: "1px solid blue",
        }}
      >
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://images.indianexpress.com/2022/01/christian-eriksen-AP.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title" style={{color:"#0000ff"}}>{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewItem;
