import { connect } from "react-redux";
import NewsHeadlines from "./newsHeadlines";

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(NewsHeadlines);
