import React from "react";
import "./List.css";
import Button from "./Button/Button";

const list = (props) => (
  <div className="well" id={props.articleId}>
  <h3 className="articleHeadline">
    <strong>{props.headline}</strong>
  </h3>
  <button className="btn btn-primary"><a href={props.URL} target="_blank">Article
  </a></button>
  <Button title={props.title} clicked={(event) => props.action(event, props.articleId)} />
  </div>
);

export default list;
