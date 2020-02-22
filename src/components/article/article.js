import React from "react";
import * as newsAPI from "../../API/news";
import "./article.css";
import moment from "moment";

class Article extends React.Component {
  componentDidMount() {
    newsAPI
      .getContent(this.props.match.params.id)
      .then(response => this.props.addArticle(response.data.data));
  }

  render() {
    const { article, children } = this.props;

    if (article) {
      const { header, date, image, content } = article;
      return (
        <div className="article">
          <div className="article_title">{header}</div>
          <div className="article_date">
            {moment(date).format('DD MM YYYY')}
          </div>
          <div className="article_img">
            <img src={image} alt={header}/>
          </div>
          <div className="article_content_wrapper">
            <div className="article_description">{content}</div>
            {children}
          </div>
        </div>
      );
    }

    return <div>Loading</div>;
  }
}

export default Article;
