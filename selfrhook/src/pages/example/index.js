import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Example1 from './example.1'
import Example2 from './example.2'
import Example3 from './example.3'
import './example.css'

const Index = () => {
  return <div>Index</div>
}

const Example = () => {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to='/'>Index</Link>
            <Link to='/example1'>example1</Link>
            <Link to='/example2'>example2</Link>
            <Link to='/example3'>example3</Link>
          </li>
        </ul>
        <Route path='/' exact component={Index}/>
        <Route path='/example1' exact component={Example1}/>
        <Route path='/example2' exact component={Example2}/>
        <Route path='/example3' exact component={Example3}/>
      </Router>
    </>
  )
}

export default Example
