import React from 'react'
import Devs from './pages/Devs/Devs'
import DevsProvider from './state/devs/Provider'

function App() {
  return (
    <DevsProvider>
      <Devs/>
    </DevsProvider>
  )
}

export default App