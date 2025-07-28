import React, { useRef } from 'react'

const login = () => {

    // let useRef.useRef()

    return <div>
        <h3>Login Details</h3>
        <form >
            <label >Email Id</label>
            <input type="text" /> <br />
            <label >Password</label>
            <input type="password" /> <br />
            <input type="checkbox" /> Please Accept the T&C <br />
            <input type="submit" value="Login"   />
        </form>
    </div>
}

export default login