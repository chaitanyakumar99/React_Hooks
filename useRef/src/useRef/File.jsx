// import { useRef } from 'react'

//to unfocus we have to use the  hook useeffect()

import { useRef, useEffect } from 'react'


const File = () => {
    const data = useRef(null)
    const submitHandler = e => {
        e.preventDefault();
        console.log(data.current.value)
    }
    useEffect(() => {
        data.current.focus();
    }, [])
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input ref={data} type="text" placeholder='Enter your name' /><br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default File
