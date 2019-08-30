import React, { lazy, Suspense } from 'react'
import { Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './example.css'
import Example1 from './example.1'
import Example2 from './example.2'
import Example3 from './example.3'
import Example4 from './example.4'
import Example5 from './example.5'
import Example6 from './example6'
import Example7 from './example.7'
import Example8 from './example.8'
import Example9 from './example.9'

export const history = createBrowserHistory()

const Index = () => {
  return <div>Index</div>
}

// const routes = [
//   { path: '/', component: Index },
//   { path: '/example1', component: lazy(() => import(/* webpackChunkName: "example1" */ './example.1')) },
//   { path: '/example2', component: lazy(() => import(/* webpackChunkName: "example2" */ './example.2')) },
//   { path: '/example3', component: lazy(() => import(/* webpackChunkName: "example3" */ './example.3')) },
//   { path: '/example4', component: lazy(() => import(/* webpackChunkName: "example4" */ './example.4')) },
//   { path: '/example5', component: lazy(() => import(/* webpackChunkName: "example5" */ './example.5')) },
// ]
{/* <Suspense fallback={null}>
  <Switch>
    {
      routes.map(({ component, path, ...props }) => {
        return (
          <Route key={path} path={path} component={component} {...props}/>
        )
      })
    }
    <Route component={() => <Redirect to={'/'} />}/>
  </Switch>
</Suspense> */}
console.log(history)
const Example = (props) => {
  return (
    <Router history={history}>
      <ul>
        <li><Link to='/'>index</Link></li>
        <li><Link to='/example1'>useState</Link></li>
        <li><Link to='/example2'>useState2</Link></li>
        <li><Link to='/example3'>useEffect</Link></li>
        <li><Link to='/example4'>useContext</Link></li>
        <li><Link to='/example5'>useReducer</Link></li>
        <li><Link to='/example6'>useReducer和useContext</Link></li>
        <li><Link to='/example7'>useMemo</Link></li>
        <li><Link to='/example8'>useRef</Link></li>
        <li><Link to='/example9'>自定义hook</Link></li>
      </ul>
      <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/example1' exact component={Example1} />
        <Route path='/example2' exact component={Example2} />
        <Route path='/example3' exact component={Example3} />
        <Route path='/example4' exact component={Example4} />
        <Route path='/example5' exact component={Example5} />
        <Route path='/example6' exact component={Example6} />
        <Route path='/example7' exact component={Example7} />
        <Route path='/example8' exact component={Example8} />
        <Route path='/example9' exact component={Example9} />
      </Switch>
    </Router>
  )
}

export default Example
