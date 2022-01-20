import React from "react";
import './App.css';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Navbar from './Components/Navbar';
import Products from "./Components/Products";
// import {css} from "@emotion/core";
// import PropagateLoader from 'react-spinners/PropagateLoader';

function App() {
// const [loading,setLoading] = useState(false);
// const override = css`
// display:block;
// border-color:red;
// margin-top:20%;
// `;
// useEffect(() => {
//  setLoading(true)
//  setTimeout(() => {
//    setLoading(false)
//  }, 5000);
// },[])
  return (
    <div className="App">
     {/* {
       loading ? <PropagateLoader color={"#3s2514"} Loading = {loading} css={override} size={40}/>
       : */}
       <>
       <Navbar/>
       <Header/>
       <Products/>
       <About/>
       <Contact/>
       </>
     {/* } */}
    </div>
  );
}

export default App;
