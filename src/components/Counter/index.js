import React from 'react';
import {connect} from 'react-redux'

const Counter = (props) => {
    const {value, step, increment, decrement} = props

        return (
            <div>
                <h1>{value}</h1>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        );
}

const mapStateToProps = (state) => {
    return state.counter
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({
            type: 'INCREMENT'
        }),
        decrement: () => dispatch({
            type: 'DECREMENT'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);