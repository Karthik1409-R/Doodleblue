import { useReducer } from 'react'

function reducer(count, action) {
    if (action.type === 'increment') return count + 1;
    if (action.type === 'decrement') return count - 1;
    return count;
}

function UseReducer() {

    const [count, dispatch] = useReducer(reducer, 0)

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </>
    )
}

export default UseReducer
