import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Components/Register';
import Login from './Components/Login';
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element = {<Register/>}/>
      <Route path ="/login" element = {<Login/>}/>
      <Route path ="/Home/:id" element = {<Home/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
