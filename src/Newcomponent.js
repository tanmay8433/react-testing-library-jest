import React from 'react'

function Newcomponent({name,testFun}) {
  return (
    <>
    <div>Newcomponent</div>
    <h1>test props component</h1>
    <p> {name}</p>


     <h1>function props testing and mocking</h1>
        <button onClick={testFun}>fun props test for click</button>
   
    </>
  )
}

export default Newcomponent