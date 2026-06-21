import { render, screen } from "@testing-library/react"
import RTLquery from "./RTLquery"
import { configure } from "@testing-library/dom"
configure({testIdAttribute:'element-id'})
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

 test('getByLabelText test case ',()=>{
  render(<RTLquery/>)
  const label=screen.getByLabelText('user name')
  const labelCheckbox=screen.getByLabelText('skills')
  expect(label).toBeInTheDocument()
  expect(label).toHaveValue('tanmay')
  expect(labelCheckbox).toBeInTheDocument()
  expect(labelCheckbox).toBeChecked()
 })


  test('getAllByLabelText test case ',()=>{
  render(<RTLquery/>)
  const label=screen.getAllByLabelText('user')
    const labelCheckbox=screen.getAllByLabelText('usercheckbox')
  for(let i=0;i<label.length;i++){
    expect(label[i]).toBeInTheDocument()
     expect(label[i]).toHaveValue("tanmaya")
  }
  for(let i=0;i<labelCheckbox.length;i++){
    expect(labelCheckbox[i]).toBeInTheDocument();
     expect(labelCheckbox[i]).toBeChecked();
  }
 })

 
  test('getByPlaceholdertext test case ',()=>{
  render(<RTLquery/>)
  const inputPlaceholder=screen.getByPlaceholderText('find placeholder')
expect(inputPlaceholder).toBeInTheDocument()
expect(inputPlaceholder).toHaveValue('agarwal')
  
 })


   test('getAllByPlaceholder text test case ',()=>{
  render(<RTLquery/>)
  const inputPlaceholder=screen.getAllByPlaceholderText('find all placeholder')
expect(inputPlaceholder[0]).toBeInTheDocument()
  
 })

 test('getByText',()=>{
  render(<RTLquery/>)
  const text=screen.getByText('unique text')
  expect(text).toBeInTheDocument();
  expect(text).toHaveClass('btn')
 })

  test('getAllByText',()=>{
  render(<RTLquery/>)
  const text=screen.getAllByText('unique textt')
  expect(text[0]).toBeInTheDocument();
  expect(text[1]).toHaveAttribute('id')
 })


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

test('overriding concepts for data-testid test case',()=>{
  render(<RTLquery/>)
  const id=screen.getByTestId('overringid');
      expect(id).toBeInTheDocument()
})

test('getByDisplayValue',()=>{
render(<RTLquery/>)
// const value=screen.getByDisplayValue('fashion')
const textareavalue=screen.getByDisplayValue('textareanew')
const radiovalue=screen.getByDisplayValue('male')
const  allvalue=screen.getAllByDisplayValue('fashion')
// expect(value).toBeInTheDocument();
expect(textareavalue).toBeInTheDocument();
expect(radiovalue).toBeInTheDocument();
for(let i=0;i<allvalue.length;i++){
  expect(allvalue[i]).toBeInTheDocument()
}
})

test('getByTitle',()=>{
  render(<RTLquery/>)
  const titlebtn=screen.getByTitle('clickme');
  expect(titlebtn).toBeInTheDocument()
})

test('getAllByTitle',()=>{
  render(<RTLquery/>)
  const spantitle=screen.getAllByTitle('spantitle');
  for(let i=0;i<spantitle.length;i++){
    expect(spantitle[i]).toBeInTheDocument()
  }
})