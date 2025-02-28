import React from 'react'
import { UserContext } from '../App'

const ComponentC = () => {
    return (
        <div>
            <UserContext.Consumer>
                {value => <h1>{value}</h1>}
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentC
