import { connect } from "react-redux";
import NavBarItems from "./navBarItems";
import { getCategories } from "../../store/categories/actions";

const mapStateToProps = ({ categories }) => ({ categories });

const mapDispatchToProps = { getCategories };

export default connect(mapStateToProps, mapDispatchToProps)(NavBarItems);
