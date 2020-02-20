import React from "react";
import * as newsAPI from "../../API/news";
import NewsBox from "../newsBox";

class Articles extends React.Component {
  componentDidMount() {
    if (this.props.articles.length === 0) {
      newsAPI
        .getHeadlines()
        .then(response => this.props.addArticles(response.data.data));
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.articles &&
          this.props.articles.map((item, index) => (
            <NewsBox
              articleId={index}
              key={item.publishedAt}
              imgUrl={item.urlToImage}
              title={item.title}
              description={item.description}
              date={item.publishedAt}
            />
          ))}
      </React.Fragment>
    );
  }
}

export default Articles;
