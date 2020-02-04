import React from "react";
import * as newsAPI from "../../API/news";
import NewsBox from "../newsBox";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [] };
  }

  componentDidMount() {
    newsAPI.getNewsHeadlines().then(response =>
      this.setState({
        news: response.data.articles
      })
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.state.news.map(item => (
          <NewsBox
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
