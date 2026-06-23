import React, { useState,useEffect } from 'react'
import Newcomponent from './Newcomponent';

function RTLquery() {
//    let Login=true;
//    const[data,setData]=useState(false)
//    useEffect(() => {
//   setTimeout(()=>{
// setData(true)
//   },800)
//    })
   const [userdata,setUserData]=useState("")
   const handleuserEvent=()=>{
    setUserData("hello user data")
   }
   const [name,setName]=useState("");
  return (
    <>
    {/* <div>RTLquery</div>
    <h1>getByRole</h1>
    <input type='text' defaultValue={'hello'} disabled/>
    <button>click</button>


    <h1>multiple item with role</h1>
    <button>click one</button>
    <label htmlFor='id2'>user name</label>
    <input type='text' id='id2'/>
    <div frole='customRole'>custom role-used for non sematic tags</div>


    <h1>RTLquery-getAllByRole</h1>
    <button> click</button>
     <button> click</button>
     <select>
      <option>1</option>
       <option>2</option>
        <option>3</option>

     </select> */}
{/* <h1>RTLquery-getByLabelText</h1>
   <label htmlFor='user-name'>user name</label>
    <input type='text' id='user-name' defaultValue={'tanmay'} />

    <label htmlFor='skills'>skills</label>
    <input type='checkbox' id='skills' defaultChecked={true}/>


    <h1>RTLquery-getAllByLabelText</h1>
      <label htmlFor='user1'>user</label>
    <input type='text' id='user1' defaultValue={'tanmaya'}/>
<br/>
     <label htmlFor='user2'>user</label>
    <input type='text' id='user2'defaultValue={'tanmaya'}/> 
<br/>
    <label htmlFor='user3'>user</label>
    <input type='text' id='user3' defaultValue={'tanmaya'}/>

      <label htmlFor='usercheckbox1'>usercheckbox</label>
    <input type='checkbox' id='usercheckbox1' defaultChecked={true}/>
<br/>
     <label htmlFor='usercheckbox2'>usercheckbox</label>
    <input type='checkbox' id='usercheckbox2' defaultChecked={true}/>

    <h1>RTLquery-getByPlaceholderText</h1>
    <label htmlFor='findplaceholder'>findplaceholder</label>
    <input type='text' id='findplaceholder' placeholder='find placeholder' defaultValue={'agarwal'}/> 

    <h1>getAllByPlaceholder </h1>
       <label htmlFor='findplaceholder1'>findplaceholder</label>
    <input type='text' id='findplaceholder1' placeholder='find all placeholder' />
       <label htmlFor='findplaceholder2'>findplaceholder</label>
    <input type='text' id='findplaceholder2' placeholder='find all placeholder'/>
       <label htmlFor='findplaceholder3'>findplaceholder</label>
    <input type='text' id='findplaceholder3' placeholder='find  all placeholder'/>

    <h1>getByText</h1>
    <button className='btn'>unique text</button>

    <h1>getAllByText</h1>
    <button id='btn' >unique textt</button>
    <button id='btn'>unique textt</button>
    <button id='btn'>unique textt</button>


        <h1>getByTestId</h1>
    <button  data-testid='uniqueid'>unique test id </button>

    <h1>getAllByTestId</h1>
    <button data-testid='btnid' >unique test id </button>
    <button data-testid='btnid'>unique test id</button>
    <button data-testid='btnid'>unique test id</button>
      
           <h1>overriding data-testid</h1>
    <button  element-id="overringid" >unique test id </button>

    <h1>agetByDisplayValue vs getAllByDisplayValue</h1>
    <input type='text' defaultValue={"fashion"}/>
    <textarea defaultValue={"textareanew"}/>
    <input type='radio' defaultValue={'male'}/>
     <input type='text' defaultValue={"fashion"}/>
      <input type='text' defaultValue={"fashion"}/>


      <h1>getByTitle and getAllByTittle</h1>
      <button title='clickme'>new title </button>
      <br/>
      <span title='spantitle'>fashion india</span>
       <span title='spantitle'>fashion india</span> */}


       {/* <h1>assertion method</h1>
       <input type='text' 
       className='assertioninput' 
       defaultValue={'assertionValue'}
       id='assertionid'
       name='userName'
      data-test="assertiondataTest"
       />
       <button className='kk' id='btnid'>click assertion test</button> */}
       {/* <h1>queryBy vs queryAllBy</h1>
      {Login?<button >Logout</button>: <button>Login</button>} 


      <h1>findB and findAllBy</h1>
{data?<h1>data fetch</h1>:<h1>data not fetch</h1>}
       */}

      <h1 id='customtestid'>custom test</h1>
      <img alt="AI genrated image" src='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'/>


      <div>find ele withan ele
        <p>child ele</p>
        <button onClick={handleuserEvent}>click me for test user event library</button>
        <h1>{userdata}</h1>


        <h1>onChange Event Testing</h1>
        <input type='text' placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <h1>{name}</h1>

        <Newcomponent name={"tanmay"}/>

       
      </div>
    </>
  )
}

export default RTLquery