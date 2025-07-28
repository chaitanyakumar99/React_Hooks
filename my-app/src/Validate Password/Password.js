import React, { useState } from "react";
import "./password.css"

function Password() {

    const [password, setPassword] = useState("");
    const [cpassword, setcPassword] = useState("");
    const [error, setError] = useState("");

    const updatepassword = (e) => {
        setPassword(e.target.value)
    }
    const conPassword = (e) => {
        setcPassword(e.target.value)
    }

    const validatepassword = (e) => {

        const regExpSpecialChars = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g
        if (password === "" || password === null) {
            setError("password should not be blank")
        }
        else if (password.length < 4) {
            setError("password should be more than 4 charcters")
        }
        else if (regExpSpecialChars.test(password)) {
            setError("password should be at least 1 digit,2 special chars, 1 lower and upper letters ")
        }
        else if (password !== conPassword) {
            setError("password should match")
        }
        else {
            setError("strong password")
        }
    }


    return <div>
        <label>Password:</label>
        <input type="Password"
            name="Password"
            value={password}
            onChange={updatepassword} /><span style={{ color: "red" }}>{error}</span> <br /> <br />

        <label>ConPassword:</label>
        <input type="cPassword"
            name="cPassword"
            value={cpassword}
            onChange={conPassword} /><span style={{ color: "red" }}>{error}</span> <br />

        <button className="btn" onClick={validatepassword}>validatepassword</button>
    </div>

}

export default Password