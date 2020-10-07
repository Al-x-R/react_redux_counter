const initialState = {
    value: 0,
    step: 1
}

const counterReducer = (state = initialState, action) => {
    const {type} = action
    switch (type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + state.step
            }
        case 'DECREMENT':
            return {
                ...state,
                value: state.value - state.step
            }
        case 'SET_STEP':
            return {
                ...state,
                step: action.value
            }
        default:
            return state
    }

}

export default counterReducer