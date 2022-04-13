import  React from 'react'
import './App.css'
// import Actors from "./components/Actors";
import Users from "./components/Users";
function App() {
  return (
      <div>
        {/*<div>*/}
        {/*  <h1>Tom</h1>*/}
        {/*    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2DCTZQovPZjJRlA6f_joPLFwhW4xrwp5KOQ&usqp=CAU'} alt={"Tom"} />*/}
        {/*</div>*/}
        {/*  скорочений варіант*/}
        {/*  <Actors*/}
        {/*  name={'Tom'}*/}
        {/*  img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2DCTZQovPZjJRlA6f_joPLFwhW4xrwp5KOQ&usqp=CAU'}/>*/}
        {/*  /!*<div>*!/*/}
          {/*    <h1>Jerry</h1>*/}
          {/*    <img src={'https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png'} alt={"Jerry"} />*/}
          {/*</div>*/}
      {/*    <Actors*/}
      {/*    name={'Jerry'}*/}
      {/*    img={'https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png'}/>*/}
<Users/>
      </div>
  );
}
export default App;