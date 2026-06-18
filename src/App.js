import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data,setData]=useState();
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
      <p>First React test case</p>
      <img title="AI genrated image" src='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'/>
      <input type='text' value={data} onChange={(e)=>setData(e.target.value+"test")}/>
    </div>
  );
}

export default App;
