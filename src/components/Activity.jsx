import Eat from "./Eat";
import Nap from "./Nap";
import Play from "./Play";
import { connect } from "react-redux";

const Activity = (props) => {
    return (
        <>
            <h1>The cat is {props.activity}</h1>
            <Nap />
            <Eat />
            <Play />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        activity: state.activity
    }
}

export default connect(mapStateToProps)(Activity);