import React, { useReducer} from 'react'
import DevsContext from './Context'
import devsReducer from './reducer'

function Provider({ children }) {
  const [devs, dispatchToDevs] = useReducer(devsReducer, [])
  return (
    <DevsContext.Provider value={{ devs, dispatchToDevs }}>
      {children}
    </DevsContext.Provider>
  )
}

export default Provider