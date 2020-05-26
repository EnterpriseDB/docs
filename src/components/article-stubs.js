import React from 'react';
import styled from '@emotion/styled';

const FlexGroups = styled('div')`
  display: grid;
  grid-template-columns: auto auto;
`;

const Article = styled('div')`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.04);
  width: calc(100% - 20px);
  min-width: 200px;
  margin-bottom: 20px;
  padding: 20px 15px 10px 15px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 5px;
  h3 {
    font-weight: 700;
    font-size: 1.25rem;
    padding-bottom: 0.5rem;
  }
`;

const ArticleStub = ({ article }) => {
  return (
    <Article>
      <h3>{article.title}</h3>
      <div>{article.summary}</div>
    </Article>
  );
};

const ArticleStubs = ({ articles }) => (
  <FlexGroups>
    {articles.map(article => {
      return <ArticleStub key={article.title} article={article} />;
    })}
  </FlexGroups>
);

export default ArticleStubs;
