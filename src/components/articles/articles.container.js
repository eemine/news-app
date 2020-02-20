import { connect } from "react-redux";
import Articles from "./articles";
import { addArticles } from "../../store/articles/actions";

const mapStateToProps = ({ articles }) => ({
  articles
});

const mapDispatchToProps = {
  addArticles
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
