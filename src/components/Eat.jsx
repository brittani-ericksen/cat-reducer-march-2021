import { connect } from "react-redux";
import { actionEating } from "../redux/actions";

const Eat = (props) => (
    <>
        <button onClick={props.handleClick}>Eating</button>
    </>
);

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(actionEating());
        }
    }
}

export default connect(null, mapDispatchToProps)(Eat);