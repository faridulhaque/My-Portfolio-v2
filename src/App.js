import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Sections/Blogs";
import Footer from "./Sections/Footer";
import Home from "./Sections/Home";
import Navbar from "./Sections/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
