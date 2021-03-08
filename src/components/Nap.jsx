import { connect } from "react-redux";
import { actionNapping } from "../redux/actions";

const Nap = (props) => (
    <>
        <button onClick={props.handleClick}>Napping</button>
    </>
);

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(actionNapping());
        }
    }
}

export default connect(null, mapDispatchToProps)(Nap);