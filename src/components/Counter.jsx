import React, { useState } from "react";

const Counter = function () {
    const [count, setCount] = useState(0)

    function Increment(){
        setCount(count + 1)
    }
    
    function decrement(){
    setCount(count - 1)
    }

    return(
        <div className="app">
            <h1>{this.state.count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;