import React, { useState } from "react";

function Functionalform() {

    const [inputfield, setInputfield] = useState({ name: "", email: "", sal: "", loc: "" })


    const updateform = (e) => {
        setInputfield({ [e.target.name]: e.target.value })
    }

    const submitform = (e) => {
        e.preventDefault();
        alert("sucess...!");
    }

    return <div>
        <form onSubmit={submitform}>

            Name: <input
                type="text"
                name="name"
                value={inputfield.name}
                onChange={updateform} /> <br />


            Email: <input
                type="email"
                name="email"
                value={inputfield.email}
                onChange={updateform} /> <br />


            Sal: <input
                type="text"
                name="sal"
                value={inputfield.sal}
                onChange={updateform} /> <br />


            Loc: <input
                type="text"
                name="loc"
                value={inputfield.loc}
                onChange={updateform} /> <br />

            <button value="submitform ">Submit</button>
        </form>

        <h1>{inputfield.name}</h1>
        <h1>{inputfield.email}</h1>
        <h1>{inputfield.sal}</h1>
        <h1>{inputfield.loc}</h1>
    </div>
}

export default Functionalform
