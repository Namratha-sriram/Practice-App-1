import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Counter from './StateDemo.jsx/Counter'
import StateDemo1 from './StateDemo.jsx/StateDemo1'

export default function NavBar() {
  return (
    <div>
        
        <nav className='navbar'>
             <Link to='/'>Counter</Link>
        <Link to='/StateDemo1'>StateDemo1</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Counter/>}></Route>
        <Route path='stateDemo1' element={<StateDemo1/>}></Route>
      </Routes>
    </div>
  )
}
