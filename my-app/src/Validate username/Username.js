import React, { useState } from "react";
import "./Name.css"

function Username() {

    const [username, setUsername] = useState("")
    const [error, setError] = useState("")

    const updateHandeler = (e) => {
        setUsername(e.target.value);
    }

    const validateName = (e) => {
        if (username === "" || username === null) {
            setError("Name shold not be blank")
        }
        else if (username.length < 4) {
            setError("user name must be more than 4 charectore")
        }
        else if (username.length > 8) {
            setError("user name should be 4 to 8 charectore only")
        }
        else {
            setError("Good User Name")
        }
    }

    return <div>
        <label className="username">Username:</label>
        <input className="text" type="text"
            name="username"
            value={username}
            onChange={updateHandeler} />
        <span style={{ color: "red" }}>{error}</span><br />

        <button className="btn" onClick={validateName}>validateName</button>
    </div>

}

export default Username;