import React from "react";

export default function NewItem(props) {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      props;
    return (
      <div
        className="card"
        style={{
          maxWidth: "20 rem",
          color: "white",
          backgroundColor: "black",
          borderRight: "1px solid violet",
          borderLeft: "1px solid green",
          borderBottom: "1px solid blue",
        }}
      >
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className=" badge bg-danger">{source}</span>
        </div>
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://images.indianexpress.com/2022/01/christian-eriksen-AP.jpg"
          }
          className="card-img-top"
          alt="..."
          draggable="false"
        />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "#0000ff" }}>
            {title}
          </h5>
          <p className="card-text">{description}</p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            Read More
          </a>
        </div>
        <center style={{ color: "blue", backgroundColor: "white" }}>
          <p className="card-text">
            <small className="text">
              Published by {author ? author : "author"} at{" "}
              {date ? new Date(date).toGMTString() : " date "}
            </small>
          </p>
        </center>
      </div>
    );
}
