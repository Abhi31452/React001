export const initialState = {count :0} 

function CounterReducer(state , action ) {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 }
        case "decrement":
            return { ...state, count: state.count - 1 }
        case "incrementByAmount":
            return { ...state, count: state.count + action.payload }
        case "decrementByAmount":
            return { ...state, count: state.count - action.payload }
        default:
            return { ...state, count: 0 }

    }
}

export default CounterReducer;