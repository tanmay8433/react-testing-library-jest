import { screen,render, fireEvent } from "@testing-library/react";
import renderer,{act} from "react-test-renderer"
import App, { handleOther } from "./App";
// import Users from "./Users";

// test("Test first React app case",()=>{
// render(<App/>);
// const text=screen.getByText(/First React test case/i); 
// const title=screen.getByTitle('AI genrated image')
// expect(text).toBeInTheDocument();
// expect (title).toBeInTheDocument();
// })

// test("Test input box",()=>{
// render(<App/>);
// const checkInput=screen.getByRole("textbox")
// const inputPlaceholder=screen.getByPlaceholderText(/Enter User Name/i); 

// expect (checkInput).toBeInTheDocument();
// expect (inputPlaceholder).toBeInTheDocument();
// expect (checkInput).toHaveAttribute("name","username");
// expect (checkInput).toHaveAttribute("id","userId");
// expect (checkInput).toHaveAttribute("type","text")
// expect (checkInput).toHaveAttribute("value","tanmay")
// })


// describe.skip("UI test case group",()=>{

// test("test case 1",()=>{
//   render(<App/>);

// const checkInput=screen.getByRole("textbox")
// expect (checkInput).toHaveAttribute("name","username");
// })

// test("test case 2",()=>{
//   render(<App/>);

// const checkInput=screen.getByRole("textbox")
// expect (checkInput).toHaveAttribute("id","userId");
// })

// })


// describe("API test case group",()=>{

// test("api test case 1",()=>{
//   render(<App/>);

// const checkInput=screen.getByRole("textbox")
// expect (checkInput).toHaveAttribute("name","username");
// })

// test("api test case 2",()=>{
//   render(<App/>);

// const checkInput=screen.getByRole("textbox")
// expect (checkInput).toHaveAttribute("id","userId");
// })
// describe("API test case subgroup",()=>{



// test("subapi test case 2",()=>{
//   render(<App/>);

// const checkInput=screen.getByRole("textbox")
// expect (checkInput).toHaveAttribute("id","userId");
// })

// })
// })



// test input onchangeevent
// test("on chang event testing",()=>{
//   render(<App/>);
//   let input=screen.getByRole("textbox");
//   fireEvent.change(input,{target:{value:'a'}})
// expect (input.value).toBe("atest");
// })

// beforeAll(()=>{
//   console.log("before all hook")
// })
// beforeEach(()=>{
//   console.log("before Each hook")
// })
// test("event click test case 1",()=>{
//   console.log("1 test case")
//   render(<App/>);
//   let button=screen.getByRole("button");
//   fireEvent.click(button);
// expect(screen.getByText('update data')).toBeInTheDocument();
// })
// test("event click test case 2",()=>{
//     console.log("2 test case")
//   render(<App/>);
//   let button=screen.getByRole("button");
//   fireEvent.click(button);
// expect(screen.getByText('update data')).toBeInTheDocument();
// })
// afterAll(()=>{
//   console.log("after all hook")
// })
// afterEach(()=>{
//   console.log("after Each hook")
// })


// snapshot testing practice
// test("snapshot for app componenet",()=>{
//   const container=render(<App/>);
 
// expect (container).toMatchSnapshot();
// })



// test("class component method testing", () => {
//   let testRenderer;

//   act(() => {
//     testRenderer = renderer.create(<Users />);
//   });

//   const instance = testRenderer.root.findByType(Users).instance;

//   expect(instance.getUserlist()).toBe("user list");
// });

// test("function component method testing",()=>{
// render(<App/>);
// const btn=screen.getByTestId("btn1")
// fireEvent.click(btn);
// expect(screen.getByText("update data")).toBeInTheDocument();
// })


test("method testing case 2",()=>{
  expect(handleOther()).toMatch('hi')
})