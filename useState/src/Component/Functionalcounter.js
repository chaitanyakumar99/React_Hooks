import React, { useState } from "react";

function Fynctioncounter() {

    const [count, setCount] = useState(0);

    // const [array,setArray]=useState([11,22,44,55,76,79])
    // const [object,setObject]=useState({id:101,name:"Rahul"})


    const increase = () => setCount(count + 1)

    const decrease=()=>setCount(count -1)

    return <div>
        <button onClick={increase}>Incr</button>
        <h1>Count:{count}</h1>  
        <button onClick={decrease}>Decr</button>
    </div>
}

export default Fynctioncounter

