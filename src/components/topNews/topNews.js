import React from "react";
import * as newsApi from "../../API/news";
import NewsBox from "../newsBox";
import "./topNews.css";

class TopNews extends React.Component {
  componentDidMount() {
    if (this.props.topNews.length === 0) {
      newsApi
        .getEachCategory()
        .then(response => this.props.addTopNews(response.data));
    }
  }

  render() {
    return (
      <div className="topNews">
        {this.props.topNews &&
          this.props.topNews.map(item => (
            <div key={item.name} className="topNews_category">
              <div className="topNews_title">{item.description}</div>
              <div className="topNews_container">
                {item.headlines.map(headline => (
                  <NewsBox
                    key={item.link}
                    description={headline.description}
                    image={headline.image}
                    link={headline.link}
                    header={headline.header}
                    date={headline.date}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default TopNews;
