import React from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/home"
import { Homework } from "./pages/homework/homework"



function App() {
  return (
    <div>
  <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/homework" element={<Homework/>}/>
  </Routes>
  </div>
  )
}

export default App
