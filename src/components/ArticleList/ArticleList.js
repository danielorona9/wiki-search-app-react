import React from "react";
import ArticleItem from "../ArticleItem/ArticleItem";
import { Container } from "semantic-ui-react";
import "./ArticleList.css";
const ArticleList = ({ articles, onArticleSelect }) => {
  const renderedList = articles.map(article => {
    return (
      <ArticleItem
        key={article.pageid}
        onArticleSelect={onArticleSelect}
        article={article}
      />
    );
  });
  return (
    <Container>
      <div className="txtColor">{articles.length} Results</div>
      {renderedList}
    </Container>
  );
};
export default ArticleList;
