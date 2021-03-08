import { connect } from "react-redux";
import { actionPlaying } from "../redux/actions";

const Play = (props) => (
    <>
        <button onClick={props.handleClick}>Playing</button>
    </>
);

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(actionPlaying());
        }
    }
}

export default connect(null, mapDispatchToProps)(Play);