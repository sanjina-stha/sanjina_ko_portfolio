
  import './App.css'
  import { Route, Routes } from 'react-router-dom';
import About from  "./components/About";

 import Contact from "./components/Contact/Contact";
 import Counter from "./components/Counter/Counter";
 import Navbar from "./components/navbar/Navbar";
 import Project from "./components/project/Project";
 import Home from "./components/Home/Home";
 import Login from "./components/Login/Login";
 import Product from './components/Product/Product';
 


 function App() {
  function handleClick(){
    console.log("button is clicked!")
  }
const age="20";
  return (
     <>
     <div>
  <Navbar/>
  </div>
  

{/* <div className = 'container'>
   <h1>My Portfolio</h1>
       <p>I am Sanjina Shrestha from Dhading. I love to eat momo.</p>
       </div>
       <div className ='container1'>
         <p> I am 20 years old</p>
       </div>
       <div className = 'container2'> 
         <p>I am at kathmandu for studies.</p>
         <button
         id = 'btn'
          onClick={handleClick}>
          Click me</button>
       </div> */}
       {/*routing configuration*/}
       <Routes>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path='/' element={<Contact/>}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/about' element={<About age={age}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Product/>}/>
       </Routes>
      
       </>
   );
  }

 export default App;




