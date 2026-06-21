// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
import RTLquery from './RTLquery';
// export const handleOther=()=>{
//   console.log('hi')
//   return 'hi';
// }
function App() {
  // const [data,setData]=useState("");
  // const handleData=()=>{
  //   setData("update data")
  // }
  return (
    <div className="App">
      {/* <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
{/* <input type='text' placeholder='Enter User Name' name='username' id='userId' value="tanmay" readOnly/> */}
      {/* <p>First React test case</p> */}
      {/* <img title="AI genrated image" src='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'/>
      <input type='text' value={data} onChange={(e)=>setData(e.target.value+"test")}/> */}
      {/* <button data-testid="btn1" onClick={handleData}>click for update</button>
      <button onClick={handleOther}>click for other</button>
      <h1>{data}</h1> */}
      <RTLquery/>
    </div>
  );
}

export default App;
