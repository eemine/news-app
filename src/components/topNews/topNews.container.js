import { connect } from "react-redux";
import { addTopNews } from "../../store/topNews/actions";
import TopNews from "./topNews";

const mapStateToProps = ({ topNews }) => ({ topNews });

const mapDispatchToProps = {
  addTopNews
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNews);
