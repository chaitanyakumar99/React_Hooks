import React from 'react'
import ComponentC from './UseContext/ComponentC'

export const UserContext = React.createContext();

const App = () => {
  return (
    <div>
      <UserContext.Provider value={"hello from use context hook"}>
        <>app component</>
        <ComponentC />
      </UserContext.Provider>
    </div>
  )
}

export default App

