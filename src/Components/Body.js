import React from 'react'
import './Body.css'
import Cards from "./Cards";
export default function Body() {
  return (
    <>
   <div className="container">
     <center><h1 className="header">Welcome! Take a Mental Health Quiz</h1></center>
     <Cards />
   </div>
   </>
  )
}
