import React, { useReducer} from 'react'
import DevsContext from './Context'
import devsReducer from './reducer'

// Componente fornecedor de estado global da lista de desenvolvedores
function Provider({ children }) {
  const [devs, dispatchToDevs] = useReducer(devsReducer, [])
  return (
    <DevsContext.Provider value={{ devs, dispatchToDevs }}>
      {children}
    </DevsContext.Provider>
  )
}

export default Provider