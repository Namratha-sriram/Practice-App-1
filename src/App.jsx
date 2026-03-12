//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

import { BrowserRouter } from "react-router-dom"
import Demo1 from "./Components/Demo1"
import Demo2 from "./Components/Demo2"
import PropsDemo1 from "./PropsDemo/PropsDemo1"
import NavBar from "./NavBar"


function App() {
  let a=20,Name="Namratha"
  const student={"name":"vishnu priya","Age":18,"gender":"Female"}

  return (
    <div>
    <Demo1/>
    <Demo2/>
    <PropsDemo1 a={a} Name={Name} student={student}/>
    <BrowserRouter>
    <NavBar/>
    </BrowserRouter>
    </div>
  )
}

export default App
