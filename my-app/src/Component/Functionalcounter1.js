import React, { useState } from "react";


function Fynctioncounter1() {
    const [value, setValue] = useState(0) //initial value

    const increament = () => {
        setValue(inc => inc + 10)        //increament value how much you want to increament
    }

    return <div>
     <button onClick={increament}>Add</button>
     <h1>Value:{value}</h1>
    </div>
}

export default Fynctioncounter1