import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DevsProvider from './state/devs/Provider'

const Home = lazy(() => {
  return import('./pages/Home/Home')
})
const Dev = lazy(() => {
  return import('./pages/Dev/Dev')
})

function App() {
  return (
    <DevsProvider>
      <Router>
        <Suspense fallback={<span>Carregando...</span>}>
          <Switch>
            <Route path='/dev/:user' component={Dev}/>
            <Route component={Home}/>
          </Switch>
        </Suspense>
      </Router>
    </DevsProvider>
  )
}

export default App