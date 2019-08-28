import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './example.css'

const Index = () => {
  return <div>Index</div>
}

const Example = (props) => {
  return (
    <>
      <Router>
        <ul>
          <li><Link to='/'>index</Link></li>
          <li><Link to='/example1'>useState</Link></li>
          <li><Link to='/example2'>useState2</Link></li>
          <li><Link to='/example3'>useEffect</Link></li>
          <li><Link to='/example4'>useContext</Link></li>
          <li><Link to='/example5'>useReducer</Link></li>
        </ul>
        <Suspense fallback={null}>
          <Switch>
            <Route path='/' exact component={lazy(() => Index)} />
            <Route path='/example1' exact component={lazy(() => import('./example.1'))} />
            <Route path='/example2' exact component={lazy(() => import('./example.2'))} />
            <Route path='/example3' exact component={lazy(() => import('./example.3'))} />
            <Route path='/example4' exact component={lazy(() => import('./example.4'))} />
            <Route path='/example5' exact component={lazy(() => import('./example.5'))} />
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default Example
