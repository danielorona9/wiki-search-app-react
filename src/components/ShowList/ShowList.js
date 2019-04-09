import React from "react";
import ArticleList from "../ArticleList/ArticleList";

const listErrorTextColor = {
  color: "#fff"
};

const ShowList = ({ articles, onArticleSelect, fetchSuccess }) => {
  if (fetchSuccess) {
    if (articles.length > 0) {
      return (
        <ArticleList articles={articles} onArticleSelect={onArticleSelect} />
      );
    } else {
      return <p style={listErrorTextColor}>No article found with that term.</p>;
    }
  } else if (fetchSuccess === false) {
    return <p style={listErrorTextColor}> No article found with that term.</p>;
  } else {
    return null;
  }
};

export default ShowList;
