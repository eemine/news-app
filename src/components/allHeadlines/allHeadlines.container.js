import { connect } from "react-redux";
import { addHeadlines } from "../../store/allHeadlines/actions";
import AllHeadlines from "./allHeadlines";

const mapStateToProps = ({ allHeadlines }) => ({ allHeadlines });

const mapDispatchToProps = { addHeadlines };

export default connect(mapStateToProps, mapDispatchToProps)(AllHeadlines);
