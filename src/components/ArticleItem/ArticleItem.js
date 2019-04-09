import React from "react";
import { Card } from "semantic-ui-react";

//data has embedded tags and has to be pushed with innerHTML
const createSnippetMarkup = snippet => {
  return { __html: snippet };
};

const ArticleItem = ({ article, onArticleSelect }) => {
  return (
    <Card
      fluid
      color="teal"
      href={"https://en.wikipedia.org/?curid=" + article.pageid}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => onArticleSelect(article)}
    >
      <div className="content">
        <div className="header">{article.title}</div>
        <div
          className="description"
          dangerouslySetInnerHTML={createSnippetMarkup(article.snippet)}
        />
      </div>
    </Card>
  );
};
export default ArticleItem;
