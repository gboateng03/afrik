import React from "react";
import { Container, Grid } from "@material-ui/core";
import "./index.css";

export default class BlogCard extends React.Component {
  render() {
    return (
      <div className="_blog_div">
        <img src={this.props.data.blog_image} className="_blog_image" />
        <p className="_blog_title">{this.props.data.blogTitle}</p>
      </div>
    );
  }
}
