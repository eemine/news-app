import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addArticle } from "../../store/article/actions";
import Article from "./article";

const mapStateToProps = ({ article }) => ({ article });

const mapDispatchToProps = {
  addArticle
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Article)
);
