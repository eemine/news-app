import { connect } from "react-redux";
import NavBar from "./navBar";
import { getCategories } from "../../store/categories/actions";

const mapStateToProps = ({ categories }) => ({ categories });

const mapDispatchToProps = { getCategories };

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
