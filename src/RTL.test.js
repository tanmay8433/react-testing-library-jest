import { act, render, screen, within } from "@testing-library/react"
import RTLquery from "./RTLquery"
import userEvent from "@testing-library/user-event"
import Newcomponent from "./Newcomponent"
// import { configure } from "@testing-library/dom"
// configure({testIdAttribute:'element-id'})
// test('should first RTL query - getByRole', () => { 
//   render(<RTLquery/>);
//   const inputField=screen.getByRole('textbox');
//     const btn=screen.getByRole('button',{name:'click'});
//   expect(inputField).toBeInTheDocument();
//   expect(inputField).toHaveValue('hello');
//   expect(inputField).toBeDisabled()
// expect(btn).toBeInTheDocument();
//  })


//  test('getbyrole testing', () => { 
//   render(<RTLquery/>);
//   const btn1=screen.getByRole('button',{name:'click one'});
//     const inputField=screen.getByRole('textbox',{name:'user name'});
//       const div1=screen.getByRole('customRole');
//   expect(btn1).toBeInTheDocument();
//   expect(inputField).toBeInTheDocument();
//   expect(div1).toBeInTheDocument();


//  })

//   test('getAllByRole testing', () => { 
//   render(<RTLquery/>);
//   const btn1=screen.getAllByRole('button');
//   const options=screen.getAllByRole('option')
//   // expect(btn1[0]).toBeInTheDocument();
//   for(let i=0;i<btn1.length;i++){
// expect(btn1[i]).toBeInTheDocument();
//   }
// for(let i=0;i<options.length;i++){
// expect(options[i]).toBeInTheDocument();
//   }


//  })

//  test('getByLabelText test case ',()=>{
//   render(<RTLquery/>)
//   const label=screen.getByLabelText('user name')
//   const labelCheckbox=screen.getByLabelText('skills')
//   expect(label).toBeInTheDocument()
//   expect(label).toHaveValue('tanmay')
//   expect(labelCheckbox).toBeInTheDocument()
//   expect(labelCheckbox).toBeChecked()
//  })


//   test('getAllByLabelText test case ',()=>{
//   render(<RTLquery/>)
//   const label=screen.getAllByLabelText('user')
//     const labelCheckbox=screen.getAllByLabelText('usercheckbox')
//   for(let i=0;i<label.length;i++){
//     expect(label[i]).toBeInTheDocument()
//      expect(label[i]).toHaveValue("tanmaya")
//   }
//   for(let i=0;i<labelCheckbox.length;i++){
//     expect(labelCheckbox[i]).toBeInTheDocument();
//      expect(labelCheckbox[i]).toBeChecked();
//   }
//  })

 
//   test('getByPlaceholdertext test case ',()=>{
//   render(<RTLquery/>)
//   const inputPlaceholder=screen.getByPlaceholderText('find placeholder')
// expect(inputPlaceholder).toBeInTheDocument()
// expect(inputPlaceholder).toHaveValue('agarwal')
  
//  })


//    test('getAllByPlaceholder text test case ',()=>{
//   render(<RTLquery/>)
//   const inputPlaceholder=screen.getAllByPlaceholderText('find all placeholder')
// expect(inputPlaceholder[0]).toBeInTheDocument()
  
//  })

//  test('getByText',()=>{
//   render(<RTLquery/>)
//   const text=screen.getByText('unique text')
//   expect(text).toBeInTheDocument();
//   expect(text).toHaveClass('btn')
//  })

//   test('getAllByText',()=>{
//   render(<RTLquery/>)
//   const text=screen.getAllByText('unique textt')
//   expect(text[0]).toBeInTheDocument();
//   expect(text[1]).toHaveAttribute('id')
//  })


// test('getByTestId test case',()=>{
//   render(<RTLquery/>)
//   const id=screen.getByTestId('uniqueid');
//       expect(id).toBeInTheDocument()
// })
// test('getAllByTestId test case',()=>{
//   render(<RTLquery/>)
//   const allid=screen.getAllByTestId('btnid')
// for(let i=0;i<allid.length;i++){
//   expect(allid[i]).toBeInTheDocument()
// }
// })

// test('overriding concepts for data-testid test case',()=>{
//   render(<RTLquery/>)
//   const id=screen.getByTestId('overringid');
//       expect(id).toBeInTheDocument()
// })

// test('getByDisplayValue',()=>{
// render(<RTLquery/>)
// // const value=screen.getByDisplayValue('fashion')
// const textareavalue=screen.getByDisplayValue('textareanew')
// const radiovalue=screen.getByDisplayValue('male')
// const  allvalue=screen.getAllByDisplayValue('fashion')
// // expect(value).toBeInTheDocument();
// expect(textareavalue).toBeInTheDocument();
// expect(radiovalue).toBeInTheDocument();
// for(let i=0;i<allvalue.length;i++){
//   expect(allvalue[i]).toBeInTheDocument()
// }
// })

// test('getByTitle',()=>{
//   render(<RTLquery/>)
//   const titlebtn=screen.getByTitle('clickme');
//   expect(titlebtn).toBeInTheDocument()
// })

// test('getAllByTitle',()=>{
//   render(<RTLquery/>)
//   const spantitle=screen.getAllByTitle('spantitle');
//   for(let i=0;i<spantitle.length;i++){
//     expect(spantitle[i]).toBeInTheDocument()
//   }
// })


// test("assertion method test case in inputfield",()=>{
//   render(<RTLquery/>)
//   const inputField=screen.getByRole('textbox')
//   expect(inputField).toBeInTheDocument()
//    expect(inputField).toHaveValue()
//   expect(inputField).toHaveValue("assertionValue")
//  expect(inputField).toBeEnabled()
// //  expect(inputField).toBeDisabled();
// expect(inputField).toHaveAttribute('id')
// expect(inputField).toHaveAttribute('data-test')
// expect(inputField).toHaveClass('assertioninput')

// })

// test('negative points test case for assertion',()=>{
//     render(<RTLquery/>)
//     const btn=screen.getByRole('button')
//     expect(btn).not.toHaveClass('btn-assertion')
// })

// test('text match and string or regex',()=>{
//   render(<RTLquery/>)
//   // const div=screen.getByText('Assertion method',{exact:false})
//   //  const div=screen.getByText('assertion method',{exact:false})
//     // const div=screen.getByText('assertion method',{exact:false})
//     // const div=screen.getByText(/assertion method/)
//     // const div=screen.getByText(/od/)
//     const div=screen.getByText(/od/i)
//   expect(div).toBeInTheDocument()
// })


// test("test textmatch with fun",()=>{
//   render(<RTLquery/>)
//   // const h1=screen.getByText((content,element)=>content.startsWith('assertion'))
//   //  const h1=screen.getByText((content,element)=>content.endsWith('method'))
//     // const h1=screen.getByText((content,element)=>content.endsWith('od'))
//      const h1=screen.getByText((content,element)=>content.includes('od'))
//   expect(h1).toBeInTheDocument()
// })

// test("queryByText test case for hidden ele",()=>{
//   render(<RTLquery/>)
//   const btnhidden=screen.queryByText('Login')
//   expect(btnhidden).not.toBeInTheDocument();
// })

// test('findByText',async()=>{
//   render(<RTLquery/>)
//   const h1find=await screen.findByText('data fetch',{},{timeout:4000});
//   expect(h1find).toBeInTheDocument()
// })
  // test('test case for custom query',()=>{
  //   render(<RTLquery/>)
  //   const ele=document.querySelector("#customtestid")
  //   expect(ele).toBeInTheDocument()
  //   expect(ele).toHaveTextContent('custom test')
  // })

  // test('test case for getByAltText',()=>{
  //   render(<RTLquery/>)
  //   // const ele=screen.getByAltText('AI genrated image')
  //   // expect(ele).toBeInTheDocument()
  //    const ele=screen.getAllByAltText('AI genrated image')
  //   expect(ele[0]).toBeInTheDocument()
  // })


  // test("find ele withan ele",()=>{
  //   render(<RTLquery/>)
  //   const pEl=screen.getByText("find ele withan ele")
  //   const subEl=within(pEl).getByText('child ele')
  //   expect(pEl).toBeInTheDocument()
  //   expect(subEl).toBeInTheDocument()
  // })


  // test("user event library test in click event",async()=>{
  //   userEvent.setup();
  //     render(<RTLquery/>)
  //     const btn=screen.getByRole('button');
  //  await userEvent.click(btn);
  //     expect(screen.getByText("hello user data")).toBeInTheDocument()
  // })

  // test("onchange test case for keyboard interaction",async()=>{
  //   userEvent.setup()
  // render(<RTLquery/>)
  // const inputField=screen.getByRole('textbox')
  // await userEvent.type(inputField,"anil")
  // expect(screen.getByText('anil')).toBeInTheDocument()
  // })


  // test('act function',async()=>{
  // userEvent.setup()
  // render(<RTLquery/>)
  // const inputField=screen.getByRole('textbox')
  // await act(async()=>{

  //   await userEvent.type(inputField,"anil")
  // })
  // expect(screen.getByText('anil')).toBeInTheDocument()
  // })


  // test('props component test case',()=>{
  //   const name='agarwal'
  //   render(<Newcomponent name={name} />)
  //   const username=screen.getByText(name);
  //   expect(username).toBeInTheDocument()

  // })

test('fun props test case',async()=>{
  const testFun=jest.fn()
  userEvent.setup()
  render(<Newcomponent testFun={testFun}/>)
  const btn=screen.getByRole('button')
  await userEvent.click(btn); 
  expect(testFun).toBeCalled();
})