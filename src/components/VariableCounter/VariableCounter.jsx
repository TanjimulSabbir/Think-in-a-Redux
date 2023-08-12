import { connect } from "react-redux";
import { Dydecrement, Dyincrement } from "../../Redux/DynamicCounter/actions";
import {increment, decrement } from "../../Redux/Counter/actions";

function VariableCounter({ count, increment, decrement }) {
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={increment}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={decrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownPro) => {
    return {
        count: ownPro.dynamic ? state?.DynamicHooksCounter?.value : state?.Counter?.value,
    }
}

const mapDispatchToProps = (dispatch, ownPro) => {
    return {
        increment: ownPro.dynamic ? () => dispatch(Dyincrement(5)) : () => dispatch(increment()),
        decrement: ownPro.dynamic ? () => dispatch(Dydecrement(2)) : () => dispatch(decrement()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);